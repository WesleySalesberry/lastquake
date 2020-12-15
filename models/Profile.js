const mongoose = require('mongoose')

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
module.exports = mongoose.model('profile', Profile);