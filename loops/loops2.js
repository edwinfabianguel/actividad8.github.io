const name = 'John'; // Nombre a buscar
const para = document.querySelector('p'); // Referencia al elemento de párrafo
const phonebook = [
  { name: 'Alice', phone: '123-456-7890' },
  { name: 'Bob', phone: '234-567-8901' },
  { name: 'John', phone: '345-678-9012' },
  { name: 'Mary', phone: '456-789-0123' }
];

// Buscar el nombre en la agenda telefónica
for (const entry of phonebook) {
  // Comprobar si el nombre de la entrada actual coincide con el nombre que estamos buscando
  if (entry.name === name) {
    // Si se encuentra una coincidencia, mostrar el nombre y el número de teléfono
    para.textContent = `${entry.name}: ${entry.phone}`;
    // Salir del bucle
    break;
  }
}
