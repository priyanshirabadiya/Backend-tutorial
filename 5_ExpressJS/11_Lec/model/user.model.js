const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    firstName: String,
    lastName: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        require: true
    },
    password: {
        type: String
    },
    mobileNo: {
        type: String
    },
    isDelete: {
        type: Boolean,
        default: false
    }
},
    {
        versionKey: false,
        timestamps: true
    }
);

module.exports = mongoose.model('password', userSchema)


