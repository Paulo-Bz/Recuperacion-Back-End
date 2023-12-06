const jwt = require('jsonwebtoken');
const UsuarioModel = require('../models/UsuarioModel');

const AutenticacionController = {};

const JWT_KEY = process.env.JWT_KEY;


AutenticacionController.autenticar = async (req, res) => {
    try {
        const { usuario, contraseña } = req.body;

        const UsuarioEncontrado = await UsuarioModel.findOne({

            usuario: usuario,
            contraseña: contraseña,

        });
        if (!UsuarioEncontrado) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }
        const datos = {
            id: UsuarioEncontrado._id,
            usuario: UsuarioEncontrado.usuario,
            nombres: UsuarioEncontrado.nombres,
            apellidos: UsuarioEncontrado.apellidos,
        }

        let token = jwt.sign(datos, JWT_KEY);

        res.json({ token: token, datos: datos });
    } catch (error) {
        return res.status(500).json({
            mensaje: "se produjo un error"
        });

    }
}






AutenticacionController.registrar = (req, res) => {
    // Simular regitro...
}

AutenticacionController.verificarToken = (req, res) => {
    const token = req.body.token;

    try {
        let desencriptado = jwt.verify(token, JWT_KEY);

        res.json({ datos: desencriptado });
    } catch (error) {
        res.status(500).json({
            mensaje: 'Se ha generado un error',
            error: error,
        });
    }
}

module.exports = AutenticacionController;