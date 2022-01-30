
const wakeUp = () => 'acordadndo!!';
const coffe = () => 'Bora tomar café!';
const sleep = () => 'Partiu Dormir';

const doingThings =(callback)=> {
  const msg = callback();
  console.log(msg);
}

doingThings(coffe);