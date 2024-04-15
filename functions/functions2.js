const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const x = 50;
const y = 60;
const width = 100;
const height = 75;
const color = 'blue';

// Función para dibujar un rectángulo en el lienzo
function drawRectangle(x, y, width, height, color) {
  // Limpiar el lienzo
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Establecer el color de relleno
  ctx.fillStyle = color;
  
  // Dibujar el rectángulo
  ctx.fillRect(x, y, width, height);
}

// Llamar a la función drawRectangle con las variables proporcionadas
drawRectangle(x, y, width, height, color);
