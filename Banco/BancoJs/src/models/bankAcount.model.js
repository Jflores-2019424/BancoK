'use strict'

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = Schema({
    monto:{
        type: "Boolean",
        default: 100.00,
        required: true
    },
    user: {
        type: "String",
        required: true,
    }
});



module.exports = mongoose.model('users', UserSchema);