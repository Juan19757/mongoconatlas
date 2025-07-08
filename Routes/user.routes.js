const express = require("express");
const router = express.Router();
const {
    getUsers,
    createUser,
    updateUser,
    deleteUser
} = require('../controllers/user.controller');

// Definición de rutas
router.get('/', getUsers);          // Obtener todos los usuarios
router.post('/', createUser);       // Crear un nuevo usuario
router.put('/:id', updateUser);     // Actualizar un usuario por ID
router.delete('/:id', deleteUser);  // Eliminar un usuario por ID

module.exports = router;