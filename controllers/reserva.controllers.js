const ctrl = {};
const Reserva = require('../models/Reserva.js');


// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
ctrl.viewObtenerReservas = async (req, res) => {
    try {
        const reservas = await Reserva.findAll({
            where: {
                estado: true
            }
        })
        return res.render('index', {
            reservas
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener las reservas'
        });
    }    
}
// Obtener una reserva
// Crear una reserva
// Actualizar una reserva
// Eliminar una reserva de forma lógica

module.exports = ctrl;