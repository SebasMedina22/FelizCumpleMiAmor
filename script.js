// Función para navegar entre secciones
document.getElementById('enterBtn').addEventListener('click', function() {
    mostrarSeccion('mensaje');
    // Puedes agregar algún efecto de animación aquí
  });
  
  // Botones "next" para moverse entre secciones
  document.querySelectorAll('.nextBtn').forEach(button => {
    button.addEventListener('click', () => {
      const siguiente = button.getAttribute('data-next');
      mostrarSeccion(siguiente);
    });
  });
  
  function mostrarSeccion(id) {
    // Oculta todas las secciones
    document.querySelectorAll('.section').forEach(section => {
      section.classList.add('hidden');
    });
    // Muestra la sección indicada
    const seccion = document.getElementById(id);
    if (seccion) {
      seccion.classList.remove('hidden');
    }
  }
  
  // Ejemplo de iniciar música de fondo (cuando se active la sección de mensaje o con una acción específica)
  // Nota: Por políticas de autoplay, tal vez necesites una acción del usuario para comenzar la reproducción.
  document.getElementById('enterBtn').addEventListener('click', function() {
    const audio = document.getElementById('bgMusic');
    // Es importante tener el source asignado antes, aquí podemos hacerlo dinámicamente o cuando tengas la canción.
    if (audio.paused) {
      audio.play().catch(err => console.log('Error al reproducir audio:', err));
    }
  });
  
  // (Opcional) Ejemplo de animación de confeti
  function lanzarConfeti() {
    // Usando canvas-confetti o una animación simple con canvas (este es un ejemplo básico)
    const canvas = document.getElementById('confettiCanvas');
    if (canvas.getContext) {
      const ctx = canvas.getContext('2d');
      // Ajustar el tamaño del canvas
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Aquí podrías implementar una animación de partículas o confeti
      // Por simplificar, se puede usar una librería que inicie la animación
    }
  }
  
  // Cuando se muestre la sección de sorpresa, lanzar la animación
  document.getElementById('sorpresa').addEventListener('transitionend', () => {
    lanzarConfeti();
  });
  