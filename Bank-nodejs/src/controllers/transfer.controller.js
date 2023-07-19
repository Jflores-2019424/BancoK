const CuentaBancaria = require('../models/bankAcount');

const transferirDinero = async (req, res) => {
  try {
    const cuentaOrigenId = req.body.cuentaOrigenId;
    const cuentaDestinoId = req.body.cuentaDestinoId;
    const monto = req.body.monto;

    if (monto <= 0) {
      return res.status(400).json({ mensaje: 'El monto debe ser un número positivo' });
    }

    const cuentaOrigen = await CuentaBancaria.findOne({ _id: cuentaOrigenId });
    const cuentaDestino = await CuentaBancaria.findOne({ _id: cuentaDestinoId });

    if (!cuentaOrigen || !cuentaDestino) {
      return res.status(404).json({ mensaje: 'Cuenta bancaria no encontrada' });
    }

    // Disminuir el saldo de la cuenta de origen
    await cuentaOrigen.disminuirSaldo(monto);

    // Aumentar el saldo de la cuenta de destino
    await cuentaDestino.aumentarSaldo(monto);

    res.json({ mensaje: 'Transferencia realizada exitosamente' });
  } catch (error) {
    console.error('Error al realizar la transferencia de dinero:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};

module.exports = {
  transferirDinero,
};