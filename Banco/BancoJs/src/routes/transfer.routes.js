'use strict'

const { Router } = require("express");
const api = Router();
const {aumentarSaldo, disminuirSaldo, createBankAcount} = require("../controllers/bankAccount.controller")

api.put('/aumentar-saldo/:id', aumentarSaldo);
api.put('/disminuir-saldo/:id', disminuirSaldo);
api.post('/create-acount', createBankAcount)

module.exports = api;