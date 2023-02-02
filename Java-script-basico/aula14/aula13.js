//  indice 012345678 usando  [] dentro do console

let umString = 'Um texto';

console.log( umString);
console.log(`${umString} em um lindo dia `)
console.log(umString.indexOf ('texto')) // para descobrir o indice de uma palavra
console.log(umString.replace(/texto/g,'outra')) //alteração  por outro elemento usando replace
console.log(umString.length); // tamanho da string
console.log(umString.slice(2,8));


