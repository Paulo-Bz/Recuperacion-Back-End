const { Schema, model } = require('mongoose');

const UsuarioSchema = new Schema({
    usuario: String,
    contraseña: String,
    nombres: String,
    apellidos: String,
});

const UsuarioModel = model('usuario', UsuarioSchema);

module.exports = UsuarioModel;