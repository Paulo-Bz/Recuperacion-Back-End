const UsuarioRouter = require('express').Router();
const {
    verUsuarios,
    verUsuario,
    crearUsuario,
    editarUsuario,
    eliminarUsuario,
} = require('../controllers/UsuarioController');

//MONGOOSE//

// ver usuarios 
UsuarioRouter.get('/usuarios', verUsuarios);

// ver usuario
UsuarioRouter.get('/usuario/:id', verUsuario);

// crear usuario
UsuarioRouter.post('/usuario', crearUsuario);

// editar usuario
UsuarioRouter.put('/usuario', editarUsuario);

// eliminar usuario
UsuarioRouter.delete('/usuario', eliminarUsuario);




module.exports = UsuarioRouter;