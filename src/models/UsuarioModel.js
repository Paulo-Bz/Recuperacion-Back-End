const { Schema, model } = require('mongoose');

const UsuarioSchema = new Schema({
    usuario: String,
    contraseña: String,
    nombres: String,
    apellidos: String,
});

//Para que la contraseña no pueda ser vista//
UsuarioSchema.set('toJSON', {
    transform: function (doc, ret, options) {
        delete ret.contraseña;
        return ret;
    },
});

const UsuarioModel = model('usuario', UsuarioSchema);

module.exports = UsuarioModel;