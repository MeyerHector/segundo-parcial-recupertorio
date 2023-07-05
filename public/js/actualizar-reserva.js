const formReserva = document.querySelector('#formActualizarReserva');
const reservaId = formReserva.dataset.id;

const nombre = document.querySelector('#nombre')
const apellido = document.querySelector('#apellido')
const dni = document.querySelector('#dni');
const ida = document.querySelector('#ida');
const vuelta = document.querySelector('#vuelta');
const precio = document.querySelector('#precio')



document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch(`/api/reservas/${reservaId}`);
    const data = await response.json();
    console.log(data)
    nombre.value = data.nombre;
    apellido.value = data.apellido;
    dni.value = data.dni;
    ida.value = data.ida;
    vuelta.value = data.vuelta;
    precio.value = data.precio;
})

formReserva.addEventListener('submit', async (e) => {
    e.preventDefault();

    reservaActualizada = {
        nombre: nombre.value,
        apellido: apellido.value,
        dni: dni.value,
        ida: ida.value,
        vuelta: vuelta.value,
        precio: precio.value
    }



    const response = await fetch(`/api/reservas/${reservaId}`, {
        method: 'PUT',
        body: JSON.stringify(reservaActualizada),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    alert('Se actualizo la reserva')
    

    setTimeout(() => {
        window.location.href = "/"
    }, 2000);




})