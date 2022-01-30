
// NUMBER DIVISIBLE BY 2 USING FILTER

const numbers = [19,21,30,3,45,22,15];

const verifyEven = (number)=> number % 2 ===0;

const isEven = numbers.filter(verifyEven);

//console.log(isEven);


// People who cant drive

const objPeople = [
  { name: 'José', age: 21 },
  { name: 'Lucas', age: 19 },
  { name: 'Maria', age: 16 },
  { name: 'Gilberto', age: 18 },
  { name: 'Vitor', age: 15 },
];

const verifyAgeDrive = (people, index)=> (people.age < 18);

const drive = objPeople.filter(verifyAgeDrive).map((element)=>  `${element.name} : ${element.age}` )

console.log(drive);





