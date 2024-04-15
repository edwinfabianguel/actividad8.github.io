const myArray = ['tomates', 'garbanzos', 'cebollas', 'arroz', 'frijoles negros'];
const list = document.createElement('ul');

// Iterar sobre cada elemento en myArray
myArray.forEach(item => {
  // Crear un elemento de lista (li)
  const listItem = document.createElement('li');
  
  // Establecer el contenido de texto del elemento de lista al elemento actual en myArray
  listItem.textContent = item;
  
  // Agregar el elemento de lista a la lista
  list.appendChild(listItem);
});

// ¡No editar el código más abajo!

const section = document.querySelector('section');
section.appendChild(list);
