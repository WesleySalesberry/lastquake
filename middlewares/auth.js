//TODO: might need to change over to passport?
//Will be used for profile dashboard


const jwt = require('jsonwebtoken')
const { model } = require('../models/User')

module.exports = function(req, res, next){
    /* 
        get token from header
        check it not the token
        verify token
     */

     const token = req.header('x-auth-token');
     
     if(!token){
         return res.status(401).json({ message: 'Token not authorized' })
     }
     try {
         jwt.verify(token, process.env.JWT_TOKEN, (error, token) => {
             if(error){
                 return res.status(401).json({ message: 'Token is not valid' })
             }else{
                 res.user = decode.user
                 next()
             }
         })
     } catch (error) {
         console.log('Error with auth middleware')
         res.status(500).json({ message: `Server Error > ${error}` })
     }
}

