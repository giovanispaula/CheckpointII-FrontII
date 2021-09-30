// *********** DARK MODE ******************
let cont = 0

let btnThmDark = document.querySelector('#btndark-mode')
btnThmDark.addEventListener('click', () => {
  if (cont % 2 == 0) {
    document.body.style.backgroundColor = 'rgb(50, 50, 50)'
    document.body.style.color = 'rgb(230, 230, 230)'

    document.getElementById('dark-mode').src = './icons/dark-mode.png'
  } else {
    document.body.style.backgroundColor = 'rgb(255, 255, 255)'
    document.body.style.color = 'rgb(0, 0, 0)'
    document.getElementById('dark-mode').src = './icons/day-light.png'
  }
  cont++
})
