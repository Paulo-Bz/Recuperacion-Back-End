const ComentariosModel = require('../models/ComentariosModel');
const { verificarToken } = require('../utils/token');

const ComentariosController = {}

ComentariosController.verComentario = async (req, res) => {
    try {
        const { id } = req.params;

        const comentarioEncontrado = await ComentariosModel.find({ _id: id });


        return res.json(comentarioEncontrado);

    } catch (error) {

        return res.status(500).json({
            mensaje: 'No se pudo ver el comentario',
            error: error
        });
    }
};


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

ComentariosController.editarComentario = async (req, res) => {
    try {
        const { id, contenido } = req.body;
        const { token } = req.headers;

        const validoToken = verificarToken(token);

        if (!validoToken) {
            return res.status(500).json({
                mensaje: "Token invalido"
            })
        }
        const userId = validoToken.id;
        const comentario = await ComentariosModel.findByIdAndUpdate(id);

        if (comentario.autor.toString() !== userId) {
            return res.status(500).json({
                mensaje: "No tiene acceso porque no es el autor"
            })
        }
        await ComentariosModel.findByIdAndUpdate(
            id,
            { contenido: contenido }
        );
        return res.json({ mensaje: 'Comentario actualizado con exito' })

    } catch (error) {

        return res.status(500).json({
            mensaje: 'Ocurrió un error al intentar editar el commentario',
            error: error
        });
    }
};

ComentariosController.eliminarComentario = async (req, res) => {
    try {
        const { id } = req.body;

        const { token } = req.headers;

        const validoToken = verificarToken(token);

        if (!validoToken) {
            return res.status(500).json({
                mensaje: "Token invalido"
            })
        }
        const userId = validoToken.id;
        const comentario = await ComentariosModel.findByIdAndDelete(id);

        if (comentario.autor.toString() !== userId) {
            return res.status(500).json({
                mensaje: "No tiene acceso porque no es el autor"
            })
        }
        await ComentariosModel.findByIdAndDelete(id);

        return res.json({ mensaje: 'Comentario eliminado exitosamente' })

    } catch (error) {

        return res.status(500).json({
            mensaje: 'Ocurrió un error al intentar eliminar el comentario',
            error: error
        });
    }
};

module.exports = ComentariosController;