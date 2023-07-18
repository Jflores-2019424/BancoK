'use strict'

require('dotenv').config();
const database = process.env.URI_MONGO;
const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

const connection = async() => {
    try{
        await mongoose.connect(database);
        console.log("Se conecto con MongoDB");
    }catch(error){
        throw new Error(error)
    }       
}

module.exports = {
    connection
}