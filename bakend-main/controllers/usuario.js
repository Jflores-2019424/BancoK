//Importacion
const { response, request } = require('express');
const bcryptjs = require('bcryptjs');
//Modelos
const Usuario = require('../models/usuario');
const tipo_cuenta = require('../models/tipo_cuenta');

//funcion para crear un admin por defecto
const defaultAdmin = async () => {
    try {
        let user = new Usuario();
        user.nombre = "Administrador";
        user.username = "ADMINB";
        user.celular = "55836905"
        user.correo = "admin@gmail.com";
        user.password = "ADMINB";
        user.rol = "ADMIN_ROLE";
        user.tipoCuenta = "Admin";
        const userEncontrado = await Usuario.findOne({ correo: user.correo });
        if (userEncontrado) return console.log("El administrador está listo");
        user.password = bcryptjs.hashSync(user.password, bcryptjs.genSaltSync());
        user = await user.save();
        if (!user) return console.log("El administrador no está listo!");
        return console.log("El administrador está listo!");
    } catch (err) {
        throw new Error(err);
    }
};

const getUsuarios = async (req = request, res = response) => {

    //Condición, me busca solo los usuarios que tengan estado en true
    const query = { estado: true };

    const listaUsuarios = await Promise.all([
        Usuario.countDocuments(query),
        Usuario.find(query)
    ]);

    res.json({
        msg: 'GET API de usuarios',
        listaUsuarios
    });

}

/*const postUsuario = async (req = request, res = response) => {

    const { nombre, correo, password, rol } = req.body;
    const usuarioDB = new Usuario({ nombre, correo, password, rol });

    //Encriptar password
    const salt = bcryptjs.genSaltSync();
    usuarioDB.password = bcryptjs.hashSync(password, salt);

    //Guardar en Base de datos
    await usuarioDB.save();

    res.status(201).json({
        msg: 'POST API de usuario',
        usuarioDB
    });

}
*/

const postUsuario = async (req = request, res = response) => {

    const { nombre,
        username,
        dpi,
        direccion,
        celular,
        correo,
        password,
        nombretrabajo,
        ingresosmensuales,
        rol,
        tipoCuenta,
    } = req.body;

    try {

        if (ingresosmensuales < 100) {
            return res.status(400).json({ error: 'Los ingresos mensuales deben ser mayores o iguales a 100' });
        }
        //-------------------------------------------------------------------------------------------------------
        // Crear el usuario
        const usuarioDB = new Usuario({
            nombre,
            username,
            dpi,
            direccion,
            celular,
            correo,
            password,
            nombretrabajo,
            ingresosmensuales,
            rol,
            tipoCuenta
        });

        // Encriptar password
        const salt = bcryptjs.genSaltSync();
        usuarioDB.password = bcryptjs.hashSync(password, salt);

        // Guardar el usuario en la base de datos
        await usuarioDB.save();
    } catch (error) {
        console.log(error); // Muestra el error en la consola para depuración
        res.status(500).json({ error: 'Error al crear el usuario' });
    }
};

const putUsuario = async (req = request, res = response) => {

    const { id } = req.params;
    const { _id, ...resto } = req.body;

    const salt = bcryptjs.genSaltSync();
    resto.password = bcryptjs.hashSync(resto.password, salt);

    const usuarioEditado = await Usuario.findByIdAndUpdate(id, resto, { new: true });

    res.status(200).json({
        msg: '----- Usuario editado -----',
        usuarioEditado
    });
}



const deleteUsuario = async (req = request, res = response) => {

    const { id } = req.params;

    const usuarioEliminado = await Usuario.findByIdAndDelete(id);
    res.json({
        msg: '----- Usuario eliminado -----',
        usuarioEliminado
    });
}







module.exports = {
    defaultAdmin,
    getUsuarios,
    postUsuario,
    putUsuario,
    deleteUsuario
}