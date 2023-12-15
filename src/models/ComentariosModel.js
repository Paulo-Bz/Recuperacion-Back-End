const mongoose = require('mongoose');
const { Schema } = require('mongoose');


const ComentariosSchema = new mongoose.Schema({

    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        auto: true
    },
    contenido: {
        type: String,
        required: true
    },
    autor: {
        type: Schema.Types.ObjectId,
        ref: 'usuario'
    },
    publicacion: {
        type: Schema.Types.ObjectId,
        ref: 'Publicacion'
    }
});

const ComentariosModel = mongoose.model('comentario', ComentariosSchema);


module.exports = ComentariosModel;