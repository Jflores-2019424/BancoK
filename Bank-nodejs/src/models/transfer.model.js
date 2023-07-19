'use strict'

const mongoose = require('mongoose');
const { Schema, model } = mongoose; 

const TransferSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  accountNumber: {
    type: Number,
    unique: true,
  },
  saldo: {
    type: Number,
    default: 0,
  },
  // Resto de campos del modelo CuentaBancaria...
});

const CuentaBancaria = model('CuentaBancaria', TransferSchema);

// Función para aumentar el saldo de la cuenta
TransferSchema.methods.aumentarSaldo = function (cantidad) {
  this.saldo += cantidad;
  return this.save();
};

// Función para disminuir el saldo de la cuenta
TransferSchema.methods.disminuirSaldo = function (cantidad) {
  if (this.saldo >= cantidad) {
    this.saldo -= cantidad;
    return this.save();
  } else {
    throw new Error('Saldo insuficiente');
  }
};

// Uso de las funciones de aumento y disminución del saldo
const cuenta = new CuentaBancaria({
  // Asignar los valores correspondientes para la cuenta bancaria
});

cuenta.aumentarSaldo(100)
  .then(cuentaActualizada => {
    console.log('Saldo aumentado:', cuentaActualizada.saldo);
    return cuentaActualizada.disminuirSaldo(50);
  })
  .then(cuentaActualizada => {
    console.log('Saldo disminuido:', cuentaActualizada.saldo);
  })
  .catch(error => {
    console.error('Error al realizar la operación:', error);
  });
