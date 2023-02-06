// OBJETO DATA ( PARA DATAS)
//funções construtora

//const tresHoras = 60 *60 *3 *1000;
//const umDia = 60 *0 *24*1000;
//const data = new Date(0 + tresHoras - umDia) ;

/*
mês 
 janeiro = 0 
 dezembro = 11
*/

/*
  USANDO Number
formato ( ano , mes , dia , hora ,minuto e segunto)

const data = new Date(2019,3,20,15,14,27);*/


/*const data = new Date ('2019-04-20T20:20:59');

console.log('Dia', data.getDate())
console.log('mes', data.getMonth()) // Mês começa do zero 
console.log('ano', data.getFullYear())
console.log('hora', data.getHours())
console.log('min', data.getMinutes())
console.log('seg', data.getSeconds())
console.log('ms', data.getMilliseconds())
console.log('dia semana', data.getDay()) // 0 é o domingo  e 6 é sábado

console.log(Date.now())

console.log(data.toString());*/

function zeroAEsquerda (num){
    return num >=10 ? num : `0${num}`;

}

function formataData (data){
   // console.log(data);
   const dia = zeroAEsquerda(data.getDate());
   const mes = zeroAEsquerda(data.getMonth() + 1);
   const ano = zeroAEsquerda(data.getFullYear());
   const hora = zeroAEsquerda(data.getHours());
   const min = zeroAEsquerda(data.getMinutes());
   const sec = zeroAEsquerda(data.getSeconds());

   return `${dia}/${mes}/${ano}  ${hora}:${min}:${sec}`;

}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
