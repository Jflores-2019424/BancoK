'use strict'

const User = require ('../models/user.model');
const Transferencia = require ('../models/transfer.model');


//CREAR TRANSFERENCIAS

const createTransferencias = async (req, res) => {
  const { cuentaOrigen, cuentaDestino, saldo, monto, descripcion } = req.body;

  try {
    let usuarioOrigen = await User.findOne({ cuentaOrigen });
    let usuarioDestino = await User.findOne({ cuentaDestino });

    if ( !usuarioOrigen ) {
      return res.status(404).send({
        msg: "El número de cuenta de origen no existe, verificar los datos",
      });
    }

    if ( !usuarioDestino ) {
      return res.status(404).send({
        msg: "El número de cuenta de destino no existe, verificar los datos",
      });
    }

    if ( monto > 1000 ) {
      return res.status(400).send({
        msg: 
          "El monto no puede ser mayor a Q1000.00",
      });
    }

    if ( monto > usuarioOrigen.balance ) {
      return res.status(400).send({
        msg: 
          "El monto no puede ser mayor al saldo disponible",
      });
    }

    usuarioOrigen.balance - monto;
    usuarioDestino.balance + monto;

    await usuarioOrigen.save();
    await usuarioDestino.save();

    await User.updateOne(
      { acountNumber: cuentaOrigen },
      { $inc: { balance: -monto } }
    );
    await User.updateOne(
      { accountNumber: cuentaDestino },
      { $inc: { balance: monto } }
    );

    const transferencia = new Transferencia({
      cuentaOrigen: cuentaOrigen,
      saldo: saldo,
      cuentaDestino: cuentaDestino,
      monto: monto,
      descripcion: descripcion,
    });

    console.log(usuarioOrigen);
    console.log(usuarioDestino);

    const newTransferencia = await transferencia.save();

    usuarioOrigen.transactions.push(newTransferencia);
    await usuarioOrigen.save();

    res.status(210).send({
      msg: "Transferencia realizada exitosamente",
      ok: true,
      transferencia: newTransferencia,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({
      msg: "Error interno del servidor",
    });
  }
}
//EXPORTACIONES

module.exports = {
  createTransferencias,
};

/*const CuentaBancaria = require('../models/bankAcount');

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
*/