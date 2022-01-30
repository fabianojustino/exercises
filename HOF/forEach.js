
//--------------------------------------- EXEMPLO DE ENVIAR UM EMAIL
//``
const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  //console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

emailListInData.forEach((element)=> showEmailList(element));

//--------------------------------------- EXEMPLO DE TABUADA DO 2
//``
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//const multipleBy2 = (item, index) => console.log(`${index} * 2 : ${item * 2}`);
//numbers.forEach(multipleBy2)

numbers.forEach((element,index)=> console.log(`${element} * 2: ${element * 2}`));


//--------------------------------------- EXEMPLO DE COLOCAR NOMES EM MAIÚSCULO
//``

const names = ['fabiano','bianca', 'juliana', 'Leticia'];
// O name é cada item do array, fabiano por exemplo, no caso ele altera o array nesse exemplo;
const namesToUpperCase= (name, index) => {
names[index] = name.toUpperCase();
} 
names.forEach(namesToUpperCase);
console.log(nombres);