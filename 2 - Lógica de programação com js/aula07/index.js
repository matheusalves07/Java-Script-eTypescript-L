// Operadores ternarios ? :
// (condição)? 'valor verdadeiro' : 'valor falso '

const pontuacaoUsuario = 800;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario Vip': 'Usuario normal';


const corUsuario = 'azul';
const corPadrao = corUsuario || 'Preto';

console.log(corPadrao)

console.log(nivelUsuario)




//if (pontuacaoUsuario >=1000){
//    console.log('você é vip');
//} else{
//    console.log('Usuario normal')
//}
