const PublicacionModel = require('../models/PublicacionModel');

const { verificarToken } = require('../utils/token');

const PublicacionController = {}


PublicacionController.verPublicaciones = async (req, res) => {
    try {
        const listaPublicaciones = await PublicacionModel.find().populate('autor');

        return res.json(listaPublicaciones);


    } catch (error) {

        return res.status(500).json({
            mensaje: 'Ocurrió un error',
            error: error
        });
    }
};

PublicacionController.verPublicacion = async (req, res) => {
    try {
        const { id } = req.params;

        const publicacionEncontrado = await PublicacionModel.findById(id);


        return res.json(publicacionEncontrado);
    } catch (error) {
        let mensaje = 'Ocurrió un error';

        if (error.kind === 'ObjectId') {
            mensaje = 'No se pudo obtener la publicacion';
        }
        return res.status(500).json({
            mensaje: mensaje,
            error: error
        });
    }
};

PublicacionController.crearPublicacion = async (req, res) => {
    try {
        const { titulo, contenido } = req.body;

        const { token } = req.headers;

        const tokenValido = verificarToken(token);

        if (!tokenValido) {
            return res.status(500).json({
                mansaje: 'token invalido',
                error: error
            });
        }

        const autor = tokenValido.id;

        const nuevaPublicacion = new PublicacionModel({
            titulo: titulo,
            contenido: contenido,
            autor: autor,
        })
        await nuevaPublicacion.save();

        return res.json({ mensaje: 'Publicacion creada con exito' })

    } catch (error) {

        return res.status(500).json({
            mensaje: 'Ocurrió un error al intentar crear la publicacion',
            error: error
        });
    }
};

PublicacionController.editarPublicacion = async (req, res) => {
    try {
        const { id, titulo, contenido, autor } = req.body;
        const { token } = req.headers;
        const validoToken = verificarToken(token);

        if (!validoToken) {
            return res.status(500).json({
                mensaje: "Token invalido"
            })
        }
        const userId = validoToken.id;
        const publicacion = await PublicacionModel.findById(id);

        if (publicacion.autor.toString() !== userId) {
            return res.status(500).json({
                mensaje: "No tiene acceso porque no es el autor"
            })
        }
        await PublicacionModel.findByIdAndUpdate(
            id,
            { titulo: titulo, contenido: contenido, autor: autor }
        );
        return res.json({ mensaje: 'Publicacion actualizado con exito' })

    } catch (error) {

        return res.status(500).json({
            mensaje: 'Ocurrió un error al intentar editar la publicacion',
            error: error
        });
    }
};

PublicacionController.eliminarPublicacion = async (req, res) => {
    try {
        const { id } = req.body;

        await PublicacionModel.findByIdAndDelete(id);

        return res.json({ mensaje: 'Publicacion eliminada' })

    } catch (error) {

        return res.status(500).json({
            mensaje: 'Ocurrió un error al intentar eliminar la publicacion',
            error: error
        });
    }
};


module.exports = PublicacionController;
