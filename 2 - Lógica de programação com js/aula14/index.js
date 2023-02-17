// For - Clássico - estrutura de repetição


// i - index

/*for (let i = 0; i <= 5; i++ ){
    console.log(`Linha ${i}`);
}*/

/* PAR OU IMPAR

for (let i = 0; i <= 10; i++ ){
    const par  = i % 2 === 0 ? 'par' : 'ímpar' ;
    console.log(i, par);
}*/  


const frutas = ['Maça', 'Pêra', 'Uva', 'Abacaxi', 'Coco'];



for (let i = 0; i < frutas.length; i++ ){
    console.log (`Indice ${i}`, frutas[i]);
}