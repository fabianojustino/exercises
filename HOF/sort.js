const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b);
//console.log(points); // [1, 5, 10, 25, 40, 100]//

const people = [
  { name: "Mateus", age: 18 },
  { name: "José", age: 16 },
  { name: "Ana", age: 23 },
  { name: "Cláudia", age: 20 },
  { name: "Bruna", age: 19 },
];

// em ordem descrecent, inverte o p1 com o p2
const organiza = (peoples)=>{
  
  return peoples.sort((p1, p2) => p1.age - p2.age);
}

console.log(organiza(people));
