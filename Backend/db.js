const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/jobportal";

const connectToMongo = async() =>{

    await mongoose.connect(mongoURI)
        console.log("Connection Successfull");
    
}

module.exports = connectToMongo 