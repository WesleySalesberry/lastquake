const express = require('express')
const router = express.Router()
const { validationResult } = require('express-validator');

const User = require('../../models/User')
const Profile = require('../../models/Profile')
const auth = require('../../middlewares/auth')

//@route   GET api/profile
//@desc    Get all profiles
//@access  Public
router.get('/', async (req, res) => {
    try {
        const profile = await Profile.find().populate('user', ['name', 'photo', 'bio', 'date'])
         if(!profile){
            return res.status(400).json({ msg: 'No profile for this user' });
        }
        res.json(profile)
    } catch (error) {
        
    }
})

//@route  GET api/profile/me
//@desc   Get current users profile
//@access private
router.get('/me', auth, async (req, res) => {
    //res.send('Your Profile')
    // res.send(req.user.id)
    try {
        const profile = await Profile.findOne({ user: req.user.id }).populate('user', [ 'username', 'date' ]);
        if(!profile){
            return res.status(400).json({ msg: 'no profile for this user' });
        }
        res.send(profile)

    } catch (error) {
        console.log(`profile/me: ${error}`)
        res.status(500).send('server error');
    }
})

//@route  POST api/profile
//@desc   create or update profile
//@access Private
router.post('/', auth, async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() })
    }

    const { bio } = req.body
    //need to do more research on this!
    //const { photo } = req.file

    const profileOBJ = {}
    profileOBJ.user = req.user.id
    if(bio) profileOBJ.bio = bio


    if(bio.length >= 141){
        return res.status(400).json({
					errors: [ { message: 'Exceeding the 140 charcter limit' } ]
				});
    }
    try {
        let profile = await Profile.findOne({user: req.user.id});
        if(profile){
            profile = await Profile.findOneAndUpdate( {user: req.user.id}, { $set: profileOBJ }, { new: true })
            res.json(profile)
        }else{
            profile = new Profile(profileOBJ)
            await profile.save()
            res.json(profile)
        }
    } catch (error) {
        console.log(error.message)
        res.send('Server Error')
        
    }
})

//@route  Get api/profile/user/id
//@desc   Get users profile 
//@access Public
router.get('/user/:id', async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.params.id }).populate('user', ['username', 'bio'])
        if(!profile) return res.status(400).json({ msg: 'Profile not found'})
        res.send(profile)
    } catch (error) {
        console.error(error.message);
		if (error.kind === 'ObjectId') {
			return res.status(400).json({ msg: 'Profile not found' });
		}
		res.status(500).send('Sever Error');
        
    }
})

//@route  Get api/profile
//@desc   Delete all user information 
//@access Private
router.delete('/', auth, async (req, res) => {
    try {
        await User.deleteMany({ user: req.user.id})
        await Profile.deleteMany({ user: req.user.id})
        res.json({ msg: 'User Deleted'})
    } catch (error) {
        console.error(error.message);
		res.status(500).send('Sever Error');
    }

})


module.exports = router