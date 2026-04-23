// Mensaje de consola para confirmar que la página cargó
console.log("Bienvenidos a SAZON 1804");

// Opcional: Podrías añadir una alerta si alguien intenta pedir fuera de horario
const botonPedido = document.querySelector('.btn-pedido');

botonPedido.addEventListener('click', () => {
    const ahora = new Date();
    const hora = ahora.getHours();
    
    // Si es antes de las 6pm (18:00) o después de las 10pm (22:00)
    if (hora < 18 || hora >= 22) {
        alert("Recuerda que abrimos de 6:00 PM a 10:00 PM. ¡Estamos preparando todo!");
    }
});