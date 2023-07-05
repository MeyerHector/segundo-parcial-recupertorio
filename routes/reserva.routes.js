// TODO: Importar el modelo y controladores de reservas, luego vincular rutas con controladores

const router = require('express').Router();
const {
    renderCrearReserva,
    renderActualizarReserva,
    obtenerReservas,
    obtenerReserva,
    crearReserva,
    actualizarReserva,
    eliminarReserva
} = require('../controllers/reserva.controllers')


// ==========================================
//         Rutas para renderizar vistas
// ==========================================

// Formulario para actualizar una reserva
router.get('/actualizar-reserva/:id', renderActualizarReserva)



// Formulario para crear una reserva

router.get('/nueva-reserva', renderCrearReserva);

// Obtener todas las reservas
router.get('/', obtenerReservas);

// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
router.get('/api/reservas', obtenerReservas);

// Obtener una reserva

router.get('/api/reservas/:id', obtenerReserva);

// Crear una reserva
router.post('/api/reservas', crearReserva);

// Actualizar una reserva
router.put('/api/reservas/:id', actualizarReserva);


// Eliminar una reserva de forma lógica
router.delete('/api/reservas/:id', eliminarReserva);

module.exports = router;