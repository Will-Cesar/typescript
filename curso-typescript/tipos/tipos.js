"use strict";
// === string
var nome = 'João';
console.log(nome);
// === number
var idade = 27;
console.log(idade);
// === boolean
var possuiHobbies = false;
console.log(possuiHobbies);
// === tipos explicitos
var minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
minhaIdade = 'idade é 27';
console.log(typeof minhaIdade);
/* Observação:
   quando o tipo é implicito, a não inicialização da variável já com um valor declarado
   determina o tipo da mesma conforme a declaração de valores na propria variável.
*/
// === array
var hobbies = ['Cozinhar', 'Praticar Esportes'];
console.log(hobbies);
console.log(typeof hobbies);
hobbies = [100, 200];
// === tuplas
var endereco = ['Av Principal', 99];
console.log(endereco);
// === enums
// estrutura que define valores pré-definidos
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul"; // = 2
})(Cor || (Cor = {}));
var minhaCor = Cor.Verde;
console.log(minhaCor);
// === any
var carro = 'BMW';
console.log(carro);
// === funções
function retornaMeuNome() {
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log('Oi');
}
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(4, 8));
// === tipo função
// nessa demonstração, foi tipado em uma variável uma função
var calculo;
calculo = multiplicar;
console.log(calculo(5, 6));
