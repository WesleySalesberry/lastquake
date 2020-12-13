const express = require('express')
const router = express.Router()

const User = require('../../models/User')
const Profile = require('../../models/Profile')
const auth = require('../../middlewares/auth')

//@route  GET api/profile/me
//@desc   Get current users profile
//@access private

router.get('/me', auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({})
        if(!profile){
            return res.status(400).json({ msg: 'no profile for this user' });
        }
        res.json(profile)

    } catch (error) {
        console.log(`Profile/Me: ${error}`)
        res.status(500).send('server error');
    }

})

module.exports = router