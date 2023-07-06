const CuentaBancaria = require('../models/bankAcount')
const usuario = await usuario.findById(usuarioId);



const aumentarSaldo = async (req, res) => {
  try {
    const cuentaBancariaId = req.params.id;
    const monto = req.body.monto;

    if (monto <= 0) {
      return res.status(400).json({ mensaje: 'El monto debe ser un número positivo' });
    }

    const cuentaBancaria = await CuentaBancaria.findOne({ _id: cuentaBancariaId });

    if (!cuentaBancaria) {
      return res.status(404).json({ mensaje: 'Cuenta bancaria no encontrada' });
    }

    await cuentaBancaria.aumentarSaldo(monto);

    res.json({ mensaje: 'Saldo aumentado exitosamente' });
  } catch (error) {
    console.error('Error al aumentar el saldo de la cuenta bancaria:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};

const disminuirSaldo = async (req, res) => {
  try {
    const cuentaBancariaId = req.params.id;
    const monto = req.body.monto;

    if (monto <= 0) {
      return res.status(400).json({ mensaje: 'El monto debe ser un número positivo' });
    }

    const cuentaBancaria = await CuentaBancaria.findOne({ _id: cuentaBancariaId });

    if (!cuentaBancaria) {
      return res.status(404).json({ mensaje: 'Cuenta bancaria no encontrada' });
    }

    await cuentaBancaria.disminuirSaldo(monto);

    res.json({ mensaje: 'Saldo disminuido exitosamente' });
  } catch (error) {
    console.error('Error al disminuir el saldo de la cuenta bancaria:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};

module.exports = {
  aumentarSaldo,
  disminuirSaldo,
};
