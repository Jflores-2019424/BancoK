const CuentaBancaria = require('../models/bankAcount.model')
const usuario = await usuario.findById(usuarioId);
const Acount = require("../models/bankAcount.model");


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

const createBankAcount = async(req, res) =>{
  const { monto, user } = req.body;

  try {
      let acount = await Acount.findOne({user});
      if(acount){
          return res.status(400).send({
              message: "Usuario en uso",
              ok: false,
              acount: acount,
          })
      }

      acount = new Acount(req.body)
      acount = await acount.save();
          res.status(200).send({
              message: `Creado`,
              acount,
      });

  }catch (error) {
      throw new Error(error)
  }

}

module.exports = {
  aumentarSaldo,
  disminuirSaldo,
  createBankAcount
};
