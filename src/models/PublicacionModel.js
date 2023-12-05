const mongoose = require('mongoose');

const PublicacionSchema = new mongoose.Schema({
    id: {
        type: String,
        required: false
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
        type: String,
        required: true
    }
});

const PublicacionModel = mongoose.model('Publicacion', PublicacionSchema);


module.exports = PublicacionModel;