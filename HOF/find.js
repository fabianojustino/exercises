
//------------------------------------- DIVISIBLE BY 2
const numbers = [19,21,30,3,45,15];

const verifyEven = (number)=> number % 2 === 0;

const isEven = numbers.find(verifyEven);
/* console.log(isEven); */

const isEven2 = numbers.find((number)=> number % 2 === 0);
/* console.log(isEven2); */


//------------------------------------- DIVISIBLE BY 3 AND 5
const findDivisibleBy3And5 = (number)=> {
  if(number % 3 === 0 && number % 5 === 0){
    //console.log(number) ou apenas return, para retornar apenas o primeiro;
} 
}
const busca = numbers.find(findDivisibleBy3And5)
console.log(busca); 



//------------------------------ NOME COM 5 LETRAS
const names =['fabiano','maria','pedro'];

const findNameWith5letters = (letter) => letter.length ===5;
 // return letter.length === 5; // ou uso um if para trazer todos

const resultName5letter = names.find(findNameWith5letters);
console.log(resultName5letter);


//-----------------------------------------------MUSICAS
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

// NESSE CASO, CADA ITEM É UM OBJETO
const findMusic= (id) => musicas.find((music)=> music.id === id);

console.log(findMusic('31031686'));
