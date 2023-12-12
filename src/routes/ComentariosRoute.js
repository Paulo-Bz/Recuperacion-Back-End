const ComentariosRouter = require('express').Router();

const { verComentarios, crearComentario } = require('../controllers/ComentariosController');


ComentariosRouter.get('/comentarios/:idPublicacion', verComentarios)

ComentariosRouter.post('/comentarios', crearComentario)


module.exports = ComentariosRouter;