const { check, body } = require('express-validator')

module.exports = {
    requireEmail: check('email')
        .trim()
        .isEmail()
        .normalizeEmail()
        .withMessage('Must be a valid email'),
    
    requirePassword: check('password')
        .trim()
        .isLength({min: 4})
        .withMessage('Must be between 4 and 20 characters'),
    
    requirePasswordConfirmation: check('passwordConfirmation')
        .trim()
        .isLength({min: 4 })
        .withMessage('Must be between 4 and 20 characters'),

    comparePasswords: body('passwordConfirmation')
        .custom((value, {req}) => {
            if(value !== req.body.password){
                throw new Error('Passwords do not match password')
            }
            return true
        }),

    checkEmail: check('email')
        .trim()
        .isEmail()
        .normalizeEmail()
        .withMessage('Invalid Credentials'),

    checkPassword: check('password')
        .trim()
        .exists()
        .withMessage('Invalid Credentials'),

    
    
    
}