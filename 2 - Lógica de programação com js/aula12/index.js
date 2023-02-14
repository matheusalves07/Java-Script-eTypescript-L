// Atribuição via desestruturação ( Array)

/*
let a = 'a';//b
let b = 'b';//c
let c = 'c';//a

const letras = [b,c,a];
[a,b,c] = letras; */



//... rest , ...spread
// ...resto  = é o quue sobra do array não definido no console 

/*const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];

const [um, , tres, , cinco, , sete] = numeros;
console.log(um , tres, cinco);*/



//acessando array dentro de array
/*const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(numeros[1][1]);*/

const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const[,[,, seis]] = numeros;
console.log(seis);
