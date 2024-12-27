const mongoose = require("mongoose");
require("dotenv").config();

//conecting to DB
const connectDB = async () => {
    //Try Connection to URI
    try {
        await mongoose.connect(process.ebv.MONGODV_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB Connected");
    } catch (e) {
        //On connection fail print to STDOUT
        console.error(e.message);
        process.exit(1);
    }

}

module.exports = connectDB;