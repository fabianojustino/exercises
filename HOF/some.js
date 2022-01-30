// LOCALIZA UM NOME BASEADO NUM CRITÉRIO e RETORNARA TRUE OU FALSE

const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

//const verifyFirstLetter= (letter, names) => names.some((name)=> name[0]=== letter)
const verifyFirstLetter= (letter, list) => list.some((name)=> name[name.length -1] === letter)

console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('x', listNames)); // false

console.log(verifyFirstLetter('o', listNames)); //true



// 1 - Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver
// contido e caso contrário, retorne false , use some ;

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, user) => arr.some((name)=> name === user);

console.log(hasName(names, 'Anas'))