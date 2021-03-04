const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


const userShema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 4,
        max: 120
    },
    email: {
        type: String,
        required: true,
        max: 120,
        min:4
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        min:4
    },
    date: {
        type: Date,
        default: Date.now
    }
});


// Hash password
userShema.pre('save', async function () {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(this.password, salt)
        this.password = hashed;
    }
     catch (error) {
        console.log(error)
    }
})



module.exports = mongoose.model('User', userShema);