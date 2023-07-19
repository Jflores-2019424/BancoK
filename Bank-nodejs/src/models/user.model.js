'use strict'

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const shortid = require('shortid');
const generateUniqueAccountNumber = () => {
    let accountNumber = '';
    while (accountNumber.length < 8) {
      accountNumber += Math.floor(Math.random() * 10); // Genera un dígito aleatorio entre 0 y 9
    }
    return accountNumber;
};
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

    ingresosMen: {
        type: Number,
        required: false,},

        numCuenta: {
            type: String,
            required: false,
            unique: true,
            },
});

UserSchema.pre('save', function (next) {
    if (!this.numCuenta) {
    this.numCuenta = generateUniqueAccountNumber();
    }
    next();
    });

module.exports = mongoose.model('users', UserSchema);


