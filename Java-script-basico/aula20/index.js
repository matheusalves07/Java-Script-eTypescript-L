// Aula OBJETOS {} 


const pessoa1 = {
    nome: 'Luiz',
    sobrenome: ' Alves',
    idade: 26 ,

    fala(){
        console.log(`A minha idade atual é ${this.idade}.`)
    },

    incrementaIdade(){
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();


/*function criarPessoa (nome, sobrenome, idade){
    return {
     nome,
     sobrenome,
     idade
    };
}

const pessoa1 = criarPessoa('Matheus', 'Alves', 26);
const pessoa2 = criarPessoa('Carlos', 'Alves', 27);
const pessoa3 = criarPessoa('Renata', 'Alves', 22);
const pessoa4 = criarPessoa('Matheus', 'castro', 23);
const pessoa5 = criarPessoa('Matheus', 'Castro', 16);

console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome, pessoa4.nome, pessoa5.nome);*/


// relembrando [] = array   {} = Objetos


