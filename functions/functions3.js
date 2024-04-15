const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada'];
const para = document.createElement('p');

// Función para generar un número aleatorio entre dos límites
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Función para elegir un nombre aleatorio del arreglo proporcionado y devolverlo
function chooseName(namesArray) {
  const randomIndex = random(0, namesArray.length - 1);
  return namesArray[randomIndex];
}

// Imprimir el nombre elegido en el texto del párrafo
para.textContent = chooseName(names);

// ¡No editar el código más abajo!

section.innerHTML = ' ';

section.appendChild(para);
