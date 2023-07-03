const Usuario = require('../models/usuario');
const Role = require('../models/role');
const Tipo = require('../models/tipo_cuenta');

//Validamos en contro de la db si ese correo ya existe
const emailExiste = async( correo = '' ) => {
    //Verficar si el correo existe
    const existeEmailDeUsuario = await Usuario.findOne( { correo } );
    if ( existeEmailDeUsuario) {
        throw new Error(`El correo ${ correo }, ya esta registrado en la DB `);
    }
}

const esRoleValido = async( rol = '') => {
    //Verificar si el rol es valido y existe en la DB
    const existeRolDB = await Role.findOne( { rol } );
    if ( !existeRolDB ) {
        throw new Error(`El rol ${ rol }, no existe en la DB `);
    }
}

const esTipoValido = async( tipo = '') => {
    //Verificar si el rol es valido y existe en la DB
    const existeTipoDB = await Tipo.findOne( { tipo } );
    if ( !existeTipoDB ) {
        throw new Error(`El tipo ${ tipo }, no existe en la DB `);
    }
}


const existeUsuarioPorId = async( id ) => {

    //Verificar si existe el ID
    const existIdOfUser = await Usuario.findById( id );
    if ( !existIdOfUser ) {
        throw new Error(`El id: ${id} no existe en la DB`);
    }

}




module.exports = {
    emailExiste,
    esRoleValido,
    existeUsuarioPorId,
    esTipoValido
}