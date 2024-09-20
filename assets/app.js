'use strict'


// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var nav = document.getElementById("nav");

// Get the offset position of the navbar
var sticky = nav.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.scrollY >= sticky) {
    nav.classList.add("sticky")
  } else {
    nav.classList.remove("sticky");
  }
}

const car_item = document.querySelector('.carrousel__item')
const car_arrow = document.querySelectorAll('.carrousel__arrow')


punto.forEach( ( cadaPunto , i )=> {
  // Asignamos un CLICK a cadaPunto
  car_arrow[i].addEventListener('click',()=>{

      // Guardar la posición de ese PUNTO
      let position  = i
      // Calculando el espacio que debe DESPLAZARSE el GRANDE
      let operation = position * -50

      // MOVEMOS el grand
      grande.style.transform = `translateX(${ operation }%)`

      // Recorremos TODOS los punto
      car_arrow.forEach( ( cadaPunto , i )=>{
          // Quitamos la clase ACTIVO a TODOS los punto
          car_arrow[i].classList.remove('active')
      })
      // Añadir la clase activo en el punto que hemos hecho CLICK
      car_arrow[i].classList.add('active')

  })
})