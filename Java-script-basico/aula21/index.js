// Tipos de dados  
//Valores primitivos e valores por referência

/*
 Primitivos (Imutáveis) - String , number, boolean , undefined, null (bigint, symbol)
*/




/*
 Referência (mutável) - Arrays, Objetos, funções   
*/

const a = {
    nome: 'luiz',
    sosbrenome: 'Alves'
};

const b = {...a};

a.nome = 'Matheus'
console.log(b)
console.log(a)


/*
let a = [1,2,3];
let b =[...a];
let c = b ;

console.log(a, b); 

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

a.push('luiz');
console.log(c);
*/