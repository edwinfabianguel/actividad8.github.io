const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada'];
const para = document.createElement('p');

// Función para elegir un nombre aleatorio del array names y mostrarlo en el párrafo
function chooseName() {
  const randomIndex = Math.floor(Math.random() * names.length);
  para.textContent = names[randomIndex];
}

// Llamar a la función chooseName una vez
chooseName();

// ¡No editar el código más abajo!

section.innerHTML = ' ';

section.appendChild(para);
