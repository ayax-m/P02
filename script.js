
// definimos el boton de guardar con el elemento buscando por id
const botonGuardar = document.getElementById('guardar')
// definimos el inputValue buscando por su id 
const inputValue = document.querySelector('#input-1')
// definimos un array vacio
let arr = []
var localS;

// creamos un add eventListener que escuchara el click del boton guardad
botonGuardar.addEventListener('click', () => {
  // agrega el valor del input al final del arreglo arr
  arr.push(inputValue.value)
  // lo guardamos en localStorage con la llave lista-pokemon y el valor es el arrego arr
  localStorage.setItem('arrPalabras', arr)
  //imprimimos en consola el arreglo actualizado
  console.log(arr)
  //limpiamos el valor del input
  inputValue.value = ''
  renderElement(arr)
})

function eliminar(item) {
  const index = arr.indexOf(item);
  //console.log(index);
  if (index > -1) {
    arr.splice(index, 1)
    localStorage.setItem('arrPalabras', arr)
  }
  renderElement();
}

function editar(item) {
  const index = arr.indexOf(item);
  let nuevo = prompt('Ingresa el nuevo valor');
  arr.splice(index,1,nuevo);
  localStorage.setItem('arrPalabras', arr)
  renderElement();
}

function renderElement() {
  let container = document.getElementById('palabra')
  console.log(arr)
  container.innerHTML = '';
    arr.forEach(function (el) {
    container.innerHTML += `
    <li>
      ${el} 
      <button onclick="eliminar(this.id)" id="${el}">Eliminar</button>
      <button onclick="editar(this.id)" id="${el}">Editar</button>
    </li>
  `;
  })
  
}


function getElements() {
  
  localS = localStorage.getItem('arrPalabras')
  arr = localS.split(',')
  renderElement()
  
}
getElements()