const elementos = [
    { tag: 'p', texto: 'Frase1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto:'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
    {tag: 'h2', texto: 'Frase 5'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');
for (let i = 0; i < elementos.length;i ++){
    let {tag , texto } = elementos[i];
    let tagCriada = document.createElement(tag);

    let textoCirado = document.createTextNode(texto);
    tagCriada.appendChild(textoCirado);
    //tagCriada.innerText = texto;
    div.appendChild(tagCriada);   
};

container.appendChild(div);




