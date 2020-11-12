"use strict";
// ======= noEmitOnError ======= // 
// propriedade setada no tsconfig.json permite ou não a compilação do arquivo caso tenha erro 
// "noEmitOnError": true ou false 
// ======= Target ======= //
// propriedade que diz qual é a versão do javascript que será usada no arquivo compilado
// "target": "es5"
// ======= Source Map ======= //
/*
    propriedade que na hora da compilação do arquivo cria um novo arquivo js.map
    esse arquivo é a cópia exata do arquivo ts, onde pode ser visto no devTools do navegador e ser debuggado
*/
// "sourceMap": true
// ======= Diretório de Saída ======= //
// propriedade onde é possível setar um diretório para armazenar os arquivos compilados
// "outDir": "./build"
// ======= Arquivo de Saída ======= //
// propriedade onde é possivel criar a saída de um arquivo com todos os códigos de compilados, tudo em um só arquivo
// mudar a propriedade "module": "commonjs" para "system"
// "outFile": "./build/app.js"  
// ======= Arrow Function ======= //
// tem como objetivo principal obter uma sinxate reduzida da função
// Ex:
var subtrair = function (N1, N2) {
    return N1 - N2;
};
// ou de forma simplificada
var subtrair2 = function (N1, N2) { return N1 - N2; };
console.log(subtrair2(2, 3));
// O contexto de "This" varia entre funções normais e arrow function
// em uma função "normal", o valor do "this" é oq se apresenta dentro do escopo da função
// em uma arrow function, o valor do "this" é o escopo global, é o valor que está associado fora da função
// ======= Parâmetro padrão ======= //  
// é possível passar um valor padrão no parâmetro da função para quando for chamada sem o uso dele, assumir aquele valor definido
// caso passe um valor, o mesmo será o novo valor assumido
// Ex:
var contagemRegressiva = function (inicio) {
    if (inicio === void 0) { inicio = 3; }
    while (inicio > 0) {
        inicio--;
        console.log(inicio);
    }
    console.log('Fim!');
};
contagemRegressiva();
contagemRegressiva(5);
// ======= Rest & Spread ======= //  
// separa os valores e espalha os mesmos
// Ex:
var numbers = [1, 10, 99, -5, 200, 1034];
console.log(Math.max.apply(Math, numbers));
// o caso de cima obtém o mesmo resultado desse ==> console.log(Math.max(numbers[0], numbers[1], numbers[2], numbers[3]))
// também existe a possibilidade de passar N parâmetros graças ao spread
// Ex:
var retornarArray = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
};
retornarArray(1, 2, 3, 4, 5, 6, 7, 8);
var a = 'Teste TS!';
console.log(a);
// ======= string ======= //
var nome = 'João';
console.log(nome);
// ======= number ======= //
var idade = 27;
console.log(idade);
// ======= boolean ======= //
var possuiHobbies = false;
console.log(possuiHobbies);
// ======= tipos explicitos ======= //
var minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
minhaIdade = 'idade é 27';
console.log(typeof minhaIdade);
/* Observação:
   quando o tipo é implicito, a não inicialização da variável já com um valor declarado
   determina o tipo da mesma conforme a declaração de valores na propria variável.
*/
// ======= array ======= //
var hobbies = ['Cozinhar', 'Praticar Esportes'];
console.log(hobbies);
console.log(typeof hobbies);
hobbies = [100, 200];
// ======= tuplas ======= //
var endereco = ['Av Principal', 99];
console.log(endereco);
// ======= enums ======= //
// estrutura que define valores pré-definidos
var Cor;
// ======= enums ======= //
// estrutura que define valores pré-definidos
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul"; // = 2
})(Cor || (Cor = {}));
var minhaCor = Cor.Verde;
console.log(minhaCor);
// ======= any ======= //
var carro = 'BMW';
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
var calculo;
calculo = multiplicar;
console.log(calculo(5, 6));
// ======= objetos ======= //
// conforme toda a regra de typescript, uma vez criado um objeto, ja inicializando a variável com propriedades pré definidas
// essa váriavel fica com a tipagem já definida
var usuario = {
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
var funcionarios = {
    supervisores: ['Jorge', 'Maria'],
    baterPonto: function (horario) {
        if (horario <= 8) {
            return 'Ponto normal';
        }
        else {
            return 'Fora do horário';
        }
    }
};
var funcionarios2 = {
    supervisores: ['Jorge', 'Maria'],
    baterPonto: function (horario) {
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
var nota = 10;
// ======= Null ======= //
var altura = 12;
var contaBancaria2 = {
    saldo: 3456,
    depositar: function (valor) {
        this.saldo += valor;
    }
};
var correntista2 = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria2,
    contatos: ['34567890', '98765432']
};
correntista2.contaBancaria.depositar(3000);
console.log(correntista2);
//# sourceMappingURL=app.js.map