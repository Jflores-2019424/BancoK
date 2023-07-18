'use strict'

require('dotenv').config();
const database = process.env.DATABASE;
const mongoose = require("mongoose");

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