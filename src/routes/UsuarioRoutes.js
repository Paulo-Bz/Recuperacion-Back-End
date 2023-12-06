const router = require('express').Router();
const {
    verUsuarios,
    verUsuario,
    crearUsuario,
    editarUsuario,
    eliminarUsuario,
} = require('../controllers/UsuarioController');

//MONGOOSE//

// ver usuarios 
router.get('/usuarios', verUsuarios);

// ver usuario
router.get('/usuario/:id', verUsuario);

// crear usuario
router.post('/usuario', crearUsuario);

// editar usuario
router.put('/usuario', editarUsuario);

// eliminar usuario
router.delete('/usuario', eliminarUsuario);




module.exports = router;