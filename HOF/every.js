
// SE TODOS ATENDEREM A CONDIÇÃO, RETORNA TRUE OU FALSE

const grades = {
  portugues: 'Aprovado',
  matematica: 'Aprovado',
  ingles: 'Aprovado',
};

 // VERIFICA SE O ESTUDANTE FOI APROVADO EM TODAS AS MATÉRIAS
const verifyGrades = (studentsGrades) => {
  return Object.values(studentsGrades).every((grade)=> grade ==='Aprovado');
}
 console.log(verifyGrades(grades)); 


const people = [
  { name: 'Mateus', age: 16 },
  { name: 'José', age: 18 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => Object.values(arr).every((object)=> object.age > minimumAge);

console.log(verifyAges(people, 16));


