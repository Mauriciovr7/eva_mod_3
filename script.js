//Variable html//
const titulo = document.querySelector('h1')
const cuadrados = document.querySelectorAll('.square') //variable square//
const span_color = document.querySelector('#colorDisplay')
const btn_reset = document.querySelector('#reset')
const btn_hard = document.querySelector('#dificil')
const btn_easy = document.querySelector('#facil')

let msg_voz = new SpeechSynthesisUtterance()
const win = "¡Correcto!"
const lost = "Inténtelo nuevamente"

let span_message = document.querySelector("#message")

//variables globales//
let colors = [] //Arreglo colors//
let pickedColor = undefined; //variable color aleatorio del computador//
let clickedColor = undefined;// color seleccionado por usuario//
let cant_cuadrados = 6

/* function Desdeafuera (color){
  for (let i = 0; i < cuadrados.length; i++) {
  cuadrados[i].style['background-color'] = color;//parámetro color ganador//
  titulo.style['color'] = color;
  span_color.textContent = color;
  }
} */
// Funcion cambio color
   function changeColors(color) {
  for (let i = 0; i < cuadrados.length; i++) {
    span_message.textContent = win; // ganador ***
    btn_reset.textContent = 'Play Again?'
    btn_reset.addEventListener('click', function () {
      btn_reset.textContent = 'Nuevos Colores'
      span_message.textContent = ''
      x= undefined
    });
    cuadrados[i].style['background-color'] = color; //parámetro color ganador//
    titulo.style['color'] = color;
    span_color.textContent = color;
  }
  msg_voz.text = win
  window.speechSynthesis.speak(msg_voz)
} 

// Funcion para retornar color aleatorio
function pickColor() {
  pickedColor = Math.floor(Math.random() * colors.length); //número de posición del color//
  console.log (pickedColor)
  return pickedColor;
}


// genera 1 color al azar rgb(21,34,78)
function randomColor(x) {
  for (let i = 0; i < colors.length; i++) { // colors.length
    console.log('colors ', colors.length)//6
    // console.log(cuadrados.length)//5
    console.log (x)//undefined
    /* if (x==undefined){
      cuadrados[i].style.visibility = 'visible'
    } */
    cuadrados[i].style.visibility = 'visible'
    cuadrados[i].style['background-color'] = colors[i] //variable i para cuadrados y color//
  }


  return pickedColor = colors[pickColor()];//retorna color en la posición arrojada por pickColor//
}
// genera un array de N colores al azar
function generateRandomColors(n) { // n = 6(hard) ó 3(easy) cuadros *****
  let arr = []
  let x = 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < 3; j++) {
      arr.push(Math.floor(Math.random() * 256))
    }
    colors.push(`rgb(${arr[0 + x]}, ${arr[1 + x]}, ${arr[2 + x]})`)
    x += 3
  }
  console.log(colors) // 6 colores
  return colors // array

}
generateRandomColors(cant_cuadrados) //  n = 6(hard) ó 3(easy) cuadros ********************************************

randomColor();

// for (let i = 0; i < colors.length; i++) {
//   cuadrados[i].style['background-color'] = colors[i]
// }

// jugar
for (let i = 0; i < cuadrados.length; i++) {
  console.log('cuadrados ',cuadrados.length)
  cuadrados[i].addEventListener('click', function () { // color seleccionado por el usuario//
    clickedColor = cuadrados[i].style['background-color'];
    if (pickedColor == clickedColor) { //condición para ganar//
      span_message.textContent = win; // ganador ***
     
      changeColors(clickedColor); // gana
    } else {
      span_message.textContent = lost // pierde
      msg_voz.text = lost
      window.speechSynthesis.speak(msg_voz)
      // cuadrados[i].style['background-color'] = '#232323';
      this.style.visibility = 'hidden'
    }
  });
}

// boton reset
btn_reset.addEventListener('click', function () {
  colors = []
  randomColor(generateRandomColors(6))
});

// boton easy
btn_easy.addEventListener('click', function () {
  btn_easy.classList.add('selected')
  btn_hard.classList.remove('selected')
});

// boton hard
btn_hard.addEventListener('click', function () {
  btn_hard.classList.add('selected')
  btn_easy.classList.remove('selected')
});