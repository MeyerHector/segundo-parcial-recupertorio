const formCrearReserva = document.querySelector('#formCrearReserva')

console.log(formCrearReserva)
formCrearReserva.addEventListener('submit', async (e) => {
    e.preventDefault()

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const dni = document.getElementById('dni').value;
    const fechaIda = document.getElementById('ida').value;
    const fechaVuelta = document.getElementById('vuelta').value;
    const precio = document.getElementById('precio').value

    const body = {
        codigo: new Date().getTime(),
        nombre,
        apellido,
        dni,
        fechaIda,
        fechaVuelta,
        precio
    }
    try {
        fetch('api/reservas', {
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    },
    alert('Se agrego la reserva correctamente')
    )
    } catch (error) {
        console.log(error)
        alert('Error al agregar la reserva')
    }
    
})