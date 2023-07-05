// TODO: Importar el modelo y controladores de reservas, luego vincular rutas con controladores

const router = require('express').Router();
const {
    viewObtenerReservas,
} = require('../controllers/reserva.controllers')


// ==========================================
//         Rutas para renderizar vistas
// ==========================================

// Obtener todas las reservas
router.get('/', viewObtenerReservas);


// Formulario para crear una reserva

router.get('/nueva-reserva', (req, res)=> {
    res.render('crear-reserva');
});

// Formulario para actualizar una reserva

// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
router.get('/api/',);
 
// Crear una reserva
router.post('/api/',);
 
// Actualizar una reserva
router.put('/api/:id',);
 
// Eliminar una reserva de forma lógica
router.delete('/api/:id',);

 
 module.exports = router;