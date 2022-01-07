const firstLi = document.getElementById("first-li");
const secondLi = document.getElementById("second-li");
const thirdLi = document.getElementById("third-li");
const input = document.getElementById("input");
const myWebpage = document.getElementById("my-spotrybefy");
const nodeLi = document.querySelectorAll("li");

// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
//R. Porque foi aplicado um css  transform: translateY(-20px), que mexe no eixo y - vertical

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.

for (let index = 0; index < nodeLi.length; index++) {
  nodeLi[index].addEventListener("click", addClass);
}

function addClass(element) {
  removeClass(nodeLi);
  element.target.className = "tech";
}
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
function removeClass(element) {
  for (let index = 0; index < element.length; index++) {
    element[index].classList.remove("tech");
  }
}

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

input.addEventListener("input", setText);

function setText() {
  let elemento = findElement("tech");
  reWrite(elemento)
}

function reWrite(elemento){
  elemento.innerText ="";
  elemento.innerText = (input.value)

}

function findElement(classe) {
  for (let index = 0; index < nodeLi.length; index++) {
    if (nodeLi[index].className === "tech") {
      return (elemento = nodeLi[index]);
    }
  }
}
// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?
myWebpage.addEventListener('dblclick', newSite);


function newSite(element){
  window.open("https://fabianojustino.github.io/","_blank")
}
// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
myWebpage.addEventListener('mouseover', changeColor);
myWebpage.addEventListener('mouseout', resetColor);

function changeColor(element){
  element.target.style.color='red'
}

function resetColor(element){
  element.target.style.color='white'
}

// Segue abaixo um exemplo do uso de event.target:

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = "Opção reiniciada";
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener("dblclick", resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.
