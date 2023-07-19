'use strict'

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = Schema({
    name: {
        type: String,
        required: false,
    },
    lastname: {
        type: String,
        required: false,
    },
    DPI: {
        type: String,
        required: false,
    },
    direction: {
        type: String,
        required: false,
    },
    cellphone: {
        type: String,
        required: false,
    },
    email:{
        type: String,
        required: false
    },
    password: {
        type: String,
        required: false
    },
    rol: {
        type: String,
        required: false,
        default: "CLIENT"
    },

    numCuenta: {
        type: String,
        required: false,},

    ingresosMen: {
        type: Number,
        required: false,}
    
});



module.exports = mongoose.model('users', UserSchema);


