const express = require('express')
const router = express.Router()

const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const { validationResult } = require('express-validator')
const{ checkEmail, checkPassword } = require('./vaildators')

const User = require('../../models/User')

//@route POST api/login
//@desc  Authenticate User & get token
//@access PUBLIC
router.post('/api/login', 
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
            if(error){
                res.json({ token })
            }
        })

    } catch (error) {
        console.log(error.message)
        res.status(500).send(`Server Error > ${error}`)
    }


})

module.exports = router