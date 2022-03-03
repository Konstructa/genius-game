let order = [];
let clickOrder = [];
let score = 0;

//0 - amarelo
//1 - azul
//2 - verde
//3 - vermelho

const yellow = document.querySelector('.yellow')
const blue = document.querySelector('.blue')
const green = document.querySelector('.green')
const red = document.querySelector('.red')

let shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clickOrder = [];

  for (let i in order) {
    let elementColor = createColorElement(order[i]);
    lightColor(elementColor, Number(i) * 1)
  }
}

let lightColor = (element, number) => {
  time = time * 500;
  setInterval(() => {
    element.classList.add('selected');
  }, tempo - 250);
  setInterval(() => {
    element.classList.remove('selected')
  }, tempo - 250)
}