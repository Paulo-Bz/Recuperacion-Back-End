const mongoose = require('mongoose');
const { Schema } = require('mongoose');


const PublicacionSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        auto: true
    },
    titulo: {
        type: String,
        required: true
    },
    contenido: {
        type: String,
        required: true
    },
    autor: {
        type: Schema.Types.ObjectId,
        ref: 'usuario'
    }
});

const PublicacionModel = mongoose.model('Publicacion', PublicacionSchema);


module.exports = PublicacionModel;