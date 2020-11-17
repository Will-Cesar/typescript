"use strict";
// ======= string ======= //
let nome = 'João';
console.log(nome);
// ======= number ======= //
let idade = 27;
console.log(idade);
// ======= boolean ======= //
let possuiHobbies = false;
console.log(possuiHobbies);
// ======= tipos explicitos ======= //
let minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
minhaIdade = 'idade é 27';
console.log(typeof minhaIdade);
/* Observação:
   quando o tipo é implicito, a não inicialização da variável já com um valor declarado
   determina o tipo da mesma conforme a declaração de valores na propria variável.
*/
// ======= array ======= //
let hobbies = ['Cozinhar', 'Praticar Esportes'];
console.log(hobbies);
console.log(typeof hobbies);
hobbies = [100, 200];
// ======= tuplas ======= //
let endereco = ['Av Principal', 99];
console.log(endereco);
// ======= enums ======= //
// estrutura que define valores pré-definidos
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul"; // = 2
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
// ======= any ======= //
let carro = 'BMW';
console.log(carro);
// ======= funções ======= //
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
// ======= tipo função ======= //
// nessa demonstração, foi tipado em uma variável uma função
let calculo;
calculo = multiplicar;
console.log(calculo(5, 6));
// ======= objetos ======= //
// conforme toda a regra de typescript, uma vez criado um objeto, ja inicializando a variável com propriedades pré definidas
// essa váriavel fica com a tipagem já definida
let usuario = {
    nome: 'João',
    idade: 27
};
// ======= desafio ======= //
/*
    Criar um objeto funcionário com:
    - Array de strings com os nomes dos supervisores
    - Função de bater ponto que recebe a hora (número) e retorna uma string
        -> Ponto normal (<= 8)
        -> Fora do horário (> 8)
*/
let funcionarios = {
    supervisores: ['Jorge', 'Maria'],
    baterPonto(horario) {
        if (horario <= 8) {
            return 'Ponto normal';
        }
        else {
            return 'Fora do horário';
        }
    }
};
let funcionarios2 = {
    supervisores: ['Jorge', 'Maria'],
    baterPonto(horario) {
        if (horario <= 8) {
            return 'Ponto normal';
        }
        else {
            return 'Fora do horário';
        }
    }
};
/* O exemplo acima é o mesmo do anterior, mas com o uso do alias, para deixar genérico o tipo */
// ======= Union Types ======= // 
// utiliza o '|' para 'ou', podendo ser dois tipos na mesma variável
let nota = 10;
// ======= Null ======= //
let altura = 12;
let contaBancaria2 = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista2 = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria2,
    contatos: ['34567890', '98765432']
};
correntista2.contaBancaria.depositar(3000);
console.log(correntista2);
//# sourceMappingURL=tipos.js.map