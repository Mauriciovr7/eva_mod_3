//Variable html//
const titulo = document.querySelector('h1')
const cuadrados = document.querySelectorAll('.square')
const span_color = document.querySelector('#colorDisplay')
let span_message = document.querySelector("#message")

//variables globales//
const colors = ['rgb(54, 135, 216)', 'rgb(48, 196, 33)', 'rgb(234, 237, 44)', 'rgb(233, 47, 28)', 'rgb(157, 57, 164)', 'rgb(191, 201, 202)']
let pickedColor = undefined;
let clickedColor = undefined;

// Funciones
function changeColors(color) {
  for (let i = 0; i < cuadrados.length; i++) {
    span_message.textContent = "¡Correcto!";
    cuadrados[i].style['background-color'] = color;
    titulo.style['color'] = color;
    span_color.textContent = color;
  }
}

// Funcion para retornar color aleatorio
function pickColor() {
  pickedColor = Math.floor(Math.random() * colors.length);
  return pickedColor;
}
function randomColor() {
  return pickedColor = colors[pickColor()];
}

randomColor();

for (let i = 0; i < colors.length; i++) {
  cuadrados[i].style['background-color'] = colors[i]
}

for (let i = 0; i < cuadrados.length; i++) {
  cuadrados[i].addEventListener('click', function () {
    clickedColor = cuadrados[i].style['background-color'];
    if (pickedColor == clickedColor) {
      changeColors(clickedColor);
    } else {
      span_message.textContent = "Inténtelo nuevamente";
      cuadrados[i].style['background-color'] = '#232323';
    }
  });
}
