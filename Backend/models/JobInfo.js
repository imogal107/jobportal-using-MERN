const mongoose = require('mongoose');
const { Schema } = mongoose;

const JobSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference the 'User' model
        required: true
    },
    jobTitle: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    requirements: {
        type: String,
        required: true
    },
    contactInformation: {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        }
    },
    jobLocation: {
        type: String,
        required: true
    },
    jobCategory: {
        type: String,
        required: true
    },
    datePosted: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("jobs", JobSchema);
