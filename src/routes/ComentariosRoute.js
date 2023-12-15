const ComentariosRouter = require('express').Router();

const { verComentarios, crearComentario, editarComentario, verComentario, eliminarComentario } = require('../controllers/ComentariosController');

//MONGOOSE//

//Ver Comentario//
ComentariosRouter.get('/comentario/:id', verComentario);

//Ver Comentarios//
ComentariosRouter.get('/comentarios/:idPublicacion', verComentarios);

//Crear Comentario//
ComentariosRouter.post('/comentario', crearComentario);

//Editar Comentario//
ComentariosRouter.put('/comentario', editarComentario);

//Eliminar Comentario//
ComentariosRouter.delete('/comentario', eliminarComentario);



module.exports = ComentariosRouter;