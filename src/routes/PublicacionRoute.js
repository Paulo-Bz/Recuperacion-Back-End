const PublicacionRouter = require('express').Router();

const { verPublicaciones,
    verPublicacion,
    crearPublicacion,
    editarPublicacion,
    eliminarPublicacion } = require('../controllers/PublicacionController');

//MONGOOSE//

//VER PUBLICACIONES//
PublicacionRouter.get('/publicaciones', verPublicaciones);

//VER UNA PUBLICACION//
PublicacionRouter.get('/publicacion/:id', verPublicacion);

//CREAR PUBLICACION//
PublicacionRouter.post('/publicacion', crearPublicacion);

//EDITAR PUBLICACION//
PublicacionRouter.put('/publicacion', editarPublicacion);

//ELIMINAR PUBLICACION//
PublicacionRouter.delete('/publicacion', eliminarPublicacion);


module.exports = PublicacionRouter;