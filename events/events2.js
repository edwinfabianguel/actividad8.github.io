const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

function drawCircle(x, y, size) {
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.fillStyle = 'black';
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fill();
}

let x = 50;
let y = 50;
const size = 30;

drawCircle(x, y, size);

// Función para manejar los eventos de teclado
function handleKeyPress(event) {
  // Verificar qué tecla se presionó
  switch(event.key) {
    case 'w':
      y -= 10; // Mover hacia arriba
      break;
    case 'a':
      x -= 10; // Mover hacia la izquierda
      break;
    case 's':
      y += 10; // Mover hacia abajo
      break;
    case 'd':
      x += 10; // Mover hacia la derecha
      break;
  }
  
  // Volver a dibujar el círculo con las nuevas coordenadas
  drawCircle(x, y, size);
}

// Agregar un event listener al documento para escuchar los eventos de teclado
document.addEventListener('keydown', handleKeyPress);
