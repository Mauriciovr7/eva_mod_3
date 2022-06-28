//Variable html//
const titulo = document.querySelector('h1')
const cuadrados = document.querySelectorAll('.square') //variable square//
const span_color = document.querySelector('#colorDisplay')
const btn_reset = document.querySelector('#reset')
const btn_hard = document.querySelector('#dificil')
const btn_easy = document.querySelector('#facil')
let span_message = document.querySelector("#message")

// Variables para mensaje de voz en navegador
let msg_voz = new SpeechSynthesisUtterance()
const win = "¡Correcto!"
const lost = "Inténtelo nuevamente"

//variables globales//
let cant_cuadrados = 6
let colors = generateRandomColors(cant_cuadrados)
let pickedColor = pickColor(colors)
let clickedColor = undefined // color seleccionado por usuario//

// Funcion para retornar color aleatorio ganador
function pickColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}

// Función para generar un color RGB aleatorio
function randomColor() {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
}

// Función para generar un arreglo de N colores al azar
function generateRandomColors(n) { // n = 6(hard) ó 3(easy) cuadros *****
  let arr = []
  for (let i = 0; i < n; i++) {
    arr.push(randomColor())
  }
  return arr
}

// Funcion cambio color
function changeColors(color) {
  for (let cuadrado of cuadrados) {
    cuadrado.style['background-color'] = color
  }
}

// jugar
for (let i = 0; i < cuadrados.length; i++) {
  cuadrados[i].style['background-color'] = colors[i]
  cuadrados[i].addEventListener('click', function () { // color seleccionado por el usuario//
    clickedColor = cuadrados[i].style['background-color']
    if (pickedColor == clickedColor) { //condición para ganar//
      span_message.textContent = win // ganador ***
      msg_voz.text = win
      titulo.style.color = clickedColor
      span_color.textContent = clickedColor
      btn_reset.textContent = "Play Again?"
      window.speechSynthesis.speak(msg_voz)
      changeColors(clickedColor) // gana
    } else {
      cuadrados[i].classList.add('desaparecer')
      span_message.textContent = lost
      msg_voz.text = lost
      window.speechSynthesis.speak(msg_voz)
      titulo.style['color'] = 'white'
      span_color.textContent = ""
    }
  })
}

// Evento click del boton reset para cuando se quieren generar nuevos colores o jugar de nuevo
btn_reset.addEventListener('click', function () {
  this.textContent = "Nuevos colores"
  titulo.style['color'] = 'white'
  span_message.textContent = ""
  span_color.textContent = ""
  colors = generateRandomColors(cant_cuadrados)
  pickedColor = pickColor(colors)
  for (let i = 0; i < cuadrados.length; i++) {
    cuadrados[i].style['visibility'] = 'visible' // visible ***
    cuadrados[i].classList.remove('desaparecer')
    cuadrados[i].style['background-color'] = colors[i]
  }
})

// Evento click del boton easy para cuando se quiera jugar en modo fácil (3 cuadrados)
btn_easy.addEventListener('click', function () {
  cant_cuadrados = 3
  btn_easy.classList.add('selected')
  btn_hard.classList.remove('selected')
  colors = generateRandomColors(cant_cuadrados)
  pickedColor = pickColor(colors)
  for (let i = 0; i < cuadrados.length; i++) {
    if (colors[i]) {
      cuadrados[i].style['background-color'] = colors[i]
    } else {
      cuadrados[i].style['display'] = 'none'
    }
  }
})

// Evento click del boton hard para cuando se quiera jugar en modo fácil (6 cuadrados)
btn_hard.addEventListener('click', function () {
  cant_cuadrados = 6
  btn_hard.classList.add('selected')
  btn_easy.classList.remove('selected')
  colors = generateRandomColors(cant_cuadrados)
  pickedColor = pickColor(colors)
  for (let i = 0; i < cuadrados.length; i++) {
    cuadrados[i].style['background-color'] = colors[i]
    cuadrados[i].style['display'] = 'block'
  }
})