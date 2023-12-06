const mongoose = require('mongoose');
const Types = require('mongoose');


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
        type: Types.ObjectId,
        ref: 'usuario'
    }
});

const PublicacionModel = mongoose.model('Publicacion', PublicacionSchema);


module.exports = PublicacionModel;