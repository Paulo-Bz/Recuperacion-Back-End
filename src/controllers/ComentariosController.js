const ComentariosModel = require('../models/ComentariosModel');
const { verificarToken } = require('../utils/token');

const ComentariosController = {}



ComentariosController.verComentarios = async (req, res) => {
    try {
        const { idPublicacion } = req.params;

        const comentariosEncontrado = await ComentariosModel.find({
            publicacion: idPublicacion
        }).populate('autor')


        return res.json(comentariosEncontrado);
    } catch (error) {

        return res.status(500).json({
            mensaje: 'No se pudo ver los comentarios',
            error: error
        });
    }
};


ComentariosController.crearComentario = async (req, res) => {
    try {
        const { contenido, idPublicacion } = req.body;

        const { token } = req.headers;

        const validoToken = verificarToken(token);

        if (!validoToken) {
            return res.status(500).json({
                mansaje: 'token invalido'
            });
        }

        const autor = validoToken.id;

        const nuevoComentario = new ComentariosModel({
            contenido: contenido,
            autor: autor,
            publicacion: idPublicacion,
        })
        await nuevoComentario.save();

        return res.json({ mensaje: 'Comentario creado exitosamente' })

    } catch (error) {

        return res.status(500).json({
            mensaje: 'Ocurrio un error al realizar el comentario',
            error: error
        });
    }
};


module.exports = ComentariosController;