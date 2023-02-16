// Atribuição via desestruturação ( Objetos)

const pessoa = {
    nome: 'Matheus',
    sobrenome: 'Alves Castro',
    idade: 27,
    endereco: {
        rua: 'Av. juracy magalhaes',
        numero: 1161
    }
};


const { nome: n = "", sobrenome, idade } = pessoa;
console.log(n, sobrenome, idade);
const {endereco: {rua, numero}, endereco} =pessoa;
console.log(rua, numero, endereco);