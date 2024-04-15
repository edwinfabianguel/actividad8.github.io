const buttonBar = document.querySelector('.button-bar');

// Función para manejar los eventos de clic en los botones
function handleButtonClick(event) {
  // Verificar si el elemento clickeado es un botón
  if (event.target.tagName === 'BUTTON') {
    // Obtener el color del atributo data-color del botón clickeado
    const color = event.target.dataset.color;
    // Establecer el fondo del button-bar al color obtenido
    buttonBar.style.backgroundColor = color;
  }
}

// Agregar un event listener al button-bar para manejar los clics en los botones
buttonBar.addEventListener('click', handleButtonClick);
