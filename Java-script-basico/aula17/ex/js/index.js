const numero = Number(prompt ('Digite um número'));
//numero = Number(numero); // convertendo um número
const numeroTitulo = window.document.getElementById('numero-titulo');
const texto = window.document.getElementById('texto');
/*
Raiz quadrada:
     é inteiro :
     é NaN: 
     arredondando para baixo:
     arredondando para cima:
     Com duas casa decimas: 55.20:
*/

numeroTitulo.innerHTML =  numero;
texto.innerHTML = '';

texto.innerHTML = `<p>Raiz quadra é ${numero ** 0.5}</p><br>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p><br>`;
texto.innerHTML += `<p>${numero} é NaN: ${Number.isNaN(numero)}</p><br>`;
texto.innerHTML += `<p>${numero} é Arrendondando para baixo: ${Math.floor(numero)}</p><br>`;
texto.innerHTML += `<p>${numero} é Arrendondando para cima: ${Math.ceil(numero)}</p><br>`;
texto.innerHTML += `<p>${numero} éCom duas casa decimas ${numero.toFixed(2)}</p>`;




