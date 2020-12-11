const express = require('express')
const router = express.Router()

const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const { validationResult } = require('express-validator')
const{ checkEmail, checkPassword } = require('./vaildators')
const auth = require('../../middlewares/auth')

const User = require('../../models/User')

// @route    GET api/login
// @desc     Get user by token
// @access   Private
router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password')
        console.log(user)
        res.send(user)
    } catch (error) {
        console.error(`GET: ${error.message}`);
        res.status(500).send('Server Error');
    }

})


//@route POST api/login
//@desc  Authenticate User & get token
//@access PUBLIC
router.post('/', 
[
    checkEmail,
    checkPassword
], async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() })
    }

    const {email, password} = req.body

    try {
        let user = await User.findOne({ email })

        if(!user){
            return res.status(400).json({
					errors: [ { message: 'Invalid Credentials' } ]
				});
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
				return res.status(400).json({
					errors: [ { message: 'Invalid Credentials' } ]
				});
            }
            
        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(payload, process.env.JWT_TOKEN, { expiresIn: 30000 }, (error, token) => {
            if(error) throw err
            res.json({ token })
            
        })

    } catch (error) {
        console.error(`POST: ${error.message}`);
        res.status(500).send(`Server Error > ${error}`)
    }


})

module.exports = router