'use strict'

const { Router } = require("express");
const api = Router();
const cuentaBancariaController = require('../controllers/transfer');

api.put('/cuentas/:id/aumentar-saldo', cuentaBancariaController.aumentarSaldo);
api.put('/cuentas/:id/disminuir-saldo', cuentaBancariaController.disminuirSaldo);

module.exports = api;