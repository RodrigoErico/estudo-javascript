// Escreva uma função chamada ePaisagem que receba dois argumentos.
// largura e alturade uma imagem (number).
// Retorne true se a imagme estiver no modo paisagem

const ePaisagem = (largura, altura) => largura > altura ? true : false

console.log(ePaisagem(300, 80));
console.log(typeof(ePaisagem))