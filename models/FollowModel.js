const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const followrSchema = mongoose.Schema({
    userTo: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    userFrom : {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }

}, { timestamps: true })


const Follower = mongoose.model('Follower', followrSchema);

module.exports = { Follower }
