//Variable html//

const titulo= document.querySelector('h1')
const cuadrados = document.querySelectorAll('.square')
const span_color= document.querySelector('#colorDisplay')

//variables globales//
const colors = ['rgb(54, 135, 216)', 'rgb(48, 196, 33)', 'rgb(234, 237, 44)', 'rgb(233, 47, 28)', 'rgb(157, 57, 164)', 'rgb(191, 201, 202)']
const pickedColor = colors[3]

for (let i=0;i<6;i++) {
  cuadrados[i].style['background-color']= colors[i]
}

titulo.style.color= pickedColor
console.log(pickedColor)
span_color.textContent= pickedColor