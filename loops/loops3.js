const para = document.querySelector('p'); // Referencia al elemento de párrafo

// Función para verificar si un número es primo
function isPrime(num) {
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

// Iterar a través de los números desde 500 hasta 2 en orden inverso
for (let i = 500; i >= 2; i--) {
  // Verificar si el número actual es primo
  if (isPrime(i)) {
    // Si el número es primo, agregarlo al texto del párrafo
    para.textContent += `${i}, `;
  }
}

// Eliminar el último separador (coma y espacio) del texto del párrafo
para.textContent = para.textContent.slice(0, -2);
