'use strict'

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    account: [{
        No: Number,
        tipo: String,
        banco: String,
        saldo: Number
    }],
    DPI: {
        type: String,
        required: true,
    },
    direction: {
        type: String,
        required: true,
    },
    cellphone: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    workName: {
        type: String,
        required: true,
    },
    monthly:{
        type: String,
        required: true
    },
    rol: {
        type: String,
        required: true,
    },
});

const AccountSchema = Schema({
    
})

module.exports = mongoose.model('users', UserSchema);


