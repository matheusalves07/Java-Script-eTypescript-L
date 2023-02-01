// condições Js ( if else, else if)

/*
if - pode ser usado sozinho

else if - não pode ser executado sozinho, sempre precisa de um if antes, pode ter quantos quiser


else - fim de uma condicional, só pode ter um
*/
const hora = 25;

if (hora >= 0 && hora <=11){
    console.log('bom dia');
} else if (hora > 11 && hora <= 17){
    console.log('boa tarde');
} else if (hora > 17  && hora <= 23){
    console.log('boa noite');
} else {
    console.log( 'Hora errada')
}


const tenhoGrana = true;

if ( tenhoGrana) {
    console.log('Cheio da graa')
} else {
    console.log('Sem dinheiro')
}