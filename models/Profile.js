const mongoose = require('mongoose')
const { model } = require('./User')

const Profile = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    photo: {
        type: String
    }, 
    bio: {
        type: String
    }, 
    date: {
		type: Date,
		default: Date.now
	}
})
model.exports = mongoose.model('profile', Profile);