let order = []
let clickOrder = []
let score = 0

//0 - amarelo
//1 - azul
//2 - verde
//3 - vermelho

const yellow = document.querySelector('.yellow')
const blue = document.querySelector('.blue')
const green = document.querySelector('.green')
const red = document.querySelector('.red')

let shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4)
  order[order.length] = colorOrder
  clickOrder = []

  for (let i in order) {
    let elementColor = createColorElement(order[i])
    lightColor(elementColor, Number(i) + 1)
  }
}

let lightColor = (element, number) => {
  number = number * 500
  setTimeout(() => {
    element.classList.add('selected')
  }, number - 250)
  setTimeout(() => {
    element.classList.remove('selected')
  })
}

let checkOrder = () => {
  for (let i in clickOrder) {
    if (clickOrder[i] != order[i]) {
      gameOver()
      break
    }
  }
  if (clickOrder.length === order.length) {
    alert('Você passou para o próximo nível, seu score é:' + score)
    nextLevel()
  }
}

let click = (color) => {
  clickOrder[clickOrder.length] = color
  createColorElement(color).classList.add('selected')

  setTimeout(() => {
    createColorElement(color).classList.remove('selected')
    checkOrder()
  }, 250)
}

let createColorElement = (color) => {
  if (color === 0) {
    return yellow
  } else if (color === 1) {
    return blue
  } else if (color === 2) {
    return green
  } else if (color === 3) {
    return red
  }
}

let nextLevel = () => {
  score++
  shuffleOrder()
}

let gameOver = () => {
  alert('Você perdeu, seu score é: ', score, '\nClique para começar novamente!')
  order = [];
  clickOrder = [];
  playGame()
}

let playGame = () => {
  alert('Novo jogo iniciado!')
  score = 0;

  nextLevel();
}

yellow.onclick = () => click(0)
blue.onclick = () => click(1)
green.onclick = () => click(2)
red.onclick = () => click(3)
/* blue.addEventListener('click', click(1))
green.addEventListener('click', click(2))
red.addEventListener('click', click(3)) */

playGame()
