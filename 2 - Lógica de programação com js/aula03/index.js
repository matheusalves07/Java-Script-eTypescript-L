// Avaliação de curto circuito

/*
FALSY -
false
0
' "" ``
null/undefined
Na
*/

/*function falaOi (){
    return 'Oi';

}
const vaiExecutar = true;
console.log( vaiExecutar && falaOi());*/


// our || 

/* somente precisa de uma verdadeira */


//console.log(0 || false || null || 'Mateus'|| true)

/*const corUsuario ='vermelho';
const corPadrao = corUsuario || 'preto';
console.log(corPadrao);*/

const a = 0;
const b = null;
const c = 'false'; // verdadeiro 
const d = false;
const e = NaN;

console.log(a||b||c||d||e);





