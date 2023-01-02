/*

*/

const nome = 'Matheus';
const sobrenome = ' Alves Castro';
const idade = 26;
const  peso = 65;
const altura = 1.70;
let IMC = peso/(altura*altura)
let anoNascimento = 2022 - idade;


let imc; //  peso/(altura*altura)

console.log(`${nome} ${sobrenome} você tem ${idade} anos, e pesa ${peso}Kg`)
console.log(`Tem ${altura} de altura e seu IMC é de ${IMC} `)
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`)

/*
1 - var permitir repetição de variaveis para redeclarar
2 -  let não permite
3 - não crie variaveis sem ( var , let ou const) , pois será um varivael Global
4 -  

*/