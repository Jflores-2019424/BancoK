const express = require('express');
const router = express.Router();
const cuentaBancariaController = require('../controllers/transfer');

router.put('/cuentas/:id/aumentar-saldo', cuentaBancariaController.aumentarSaldo);
router.put('/cuentas/:id/disminuir-saldo', cuentaBancariaController.disminuirSaldo);

module.exports = router;
