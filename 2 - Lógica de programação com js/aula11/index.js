// Diferença var , let e const

const verdadeira = true;

let nome= 'luiz'; //criando
// let não pode ser redeclarada
// let tem escopo de bloco {}

var nome2 = 'luiz';
// var só tem escopo de função


if(verdadeira){
    let nome = 'Otávio'; //criando
    var nome2 = 'Matheus'; // redeclarada
    
    console.log(nome, nome2);
    if(verdadeira){
        var nome2 = 'carlos'; // redeclarada
        let nome = 'Outra coisa';
        console.log(nome, nome2);
    }
}


// exemplo com função 
// toda função protege suas variaveis



/*function falaOi(){
    var sobrenome ='Alves';
    var name = 'Matheus';
    
    console.log(name, sobrenome);


    if(verdadeira){
        console.log(sobrenome);
    }
}

falaOi();*/

var sobrenome = 'Alves Castro';
console.log( sobrenome);
