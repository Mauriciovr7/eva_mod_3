const colors = ['rgb(54, 135, 216)', 'rgb(48, 196, 33)', 'rgb(234, 237, 44)', 'rgb(233, 47, 28)', 'rgb(157, 57, 164)', 'rgb(191, 201, 202)']
const cuadrados = document.querySelectorAll('.square')

for (let i=0;i<6;i++) {
  cuadrados[i] = colors[i]
}