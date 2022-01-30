// CONVERT ALL NUMBER IN negativeNumber

const numbers = [1, 2, 3, 4, -5];

const negativeNumbers = numbers.map((number) =>
  number > 0 ? number * -1 : number
);

//console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]
//console.log(numbers); // [ 1, 2, 3, 4, -5 ]

// UNIR DOIS ARRAYS

const products = ["Arroz", "Feijao", "Alface", "Tomate"];

const prices = [2.99, 3.99, 1.5, 2];

const updateProducts = (listProducts, listPrices) =>
  listProducts.map((product, index) => ({ [product]: listPrices[index] }));

const listProducts = updateProducts(products, prices);
//console.log(listProducts);

// Função para buscar e imprimir o nome completo de todos os estudantes que estudam no turno da manhã.

const estudantes = [
  {
    nome: "Jorge",
    sobrenome: "Silva",
    idade: 14,
    turno: "Manhã",
    materias: [
      { name: "Matemática", nota: 67 },
      { name: "Português", nota: 79 },
      { name: "Química", nota: 70 },
      { name: "Biologia", nota: 65 },
    ],
  },
  {
    nome: "Mario",
    sobrenome: "Ferreira",
    idade: 15,
    turno: "Tarde",
    materias: [
      { name: "Matemática", nota: "59" },
      { name: "Português", nota: "80" },
      { name: "Química", nota: "78" },
      { name: "Biologia", nota: "92" },
    ],
  },
  {
    nome: "Jorge",
    sobrenome: "Santos",
    idade: 15,
    turno: "Manhã",
    materias: [
      { name: "Matemática", nota: "76" },
      { name: "Português", nota: "90" },
      { name: "Química", nota: "70" },
      { name: "Biologia", nota: "80" },
    ],
  },
];

const studentsStudyMorning = estudantes
  .filter((estudante) => estudante.turno === "Manhã")
  .map((estudante) => (`${estudante.nome} ${estudante.sobrenome}`));

console.log(studentsStudyMorning);


const verifySituation = (students, name) => {
  const info = students.find((aluno)=> aluno.nome = name);

  return info.materias.map((materia)=> (`${materia.name} : ${(materia.nota >= 60)? 'Aprovado' : 'Reprovado'}`))
}
console.log(verifySituation(estudantes,'Jorge'))
