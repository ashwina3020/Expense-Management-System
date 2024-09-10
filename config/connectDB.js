//establish connectio with mongodb
const mongoose = require("mongoose");
const colors = require("colors");
const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log('server running on ${mongoose.conection.host}'.bgCyan.white);
    }
    catch(error){
        console.log('${error}'.bgRed);
        console.log("error encountered in connect DB");
    }
};

module.exports = connectDB;
