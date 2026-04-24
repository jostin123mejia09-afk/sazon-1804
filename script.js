document.addEventListener('DOMContentLoaded', () => {
    // 1. Animación de entrada para los personajes
    const perfiles = document.querySelectorAll('.perfil');
    setTimeout(() => {
        perfiles.forEach(p => p.classList.add('visible'));
    }, 300);

    // 2. Simulador de oyentes en vivo (Plus++)
    const numVistas = document.getElementById('numVistas');
    setInterval(() => {
        let actual = parseInt(numVistas.innerText);
        // Sube o baja un poco el número para que parezca real
        let cambio = Math.floor(Math.random() * 5) - 2; 
        numVistas.innerText = actual + cambio;
    }, 3000);

    // 3. Acción del botón
    const btnLive = document.getElementById('btnLive');
    btnLive.addEventListener('click', () => {
        btnLive.style.backgroundColor = "#238636"; // Cambia a verde al conectar
        btnLive.innerText = "⌛ CONECTANDO...";
        console.log("Iniciando transmisión de Los Alta Pinta...");
    });
});