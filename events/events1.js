const btn = document.querySelector('.off');

// Función para cambiar el texto del botón
function toggleButtonText() {
  if (btn.textContent === 'Apagar') {
    btn.textContent = 'Encender';
  } else {
    btn.textContent = 'Apagar';
  }
}

// Agregar un event listener al botón para que llame a la función toggleButtonText cuando se haga clic
btn.addEventListener('click', toggleButtonText);
