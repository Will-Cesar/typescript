"use strict";
// ======= Classe ======= //
// classe no es6 é um detalhe de sintaxe, é uma forma diferente de escrever uma função voltada a orientação a objeto
// Ex:
class Data {
    constructor(dia, mes, ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(3, 11, 1991);
console.log(aniversario);
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
const subtrair = (N1, N2) => {
    return N1 - N2;
};
// ou de forma simplificada
const subtrair2 = (N1, N2) => N1 - N2;
console.log(subtrair2(2, 3));
// O contexto de "This" varia entre funções normais e arrow function
// em uma função "normal", o valor do "this" é oq se apresenta dentro do escopo da função
// em uma arrow function, o valor do "this" é o escopo global, é o valor que está associado fora da função
// ======= Parâmetro padrão ======= //  
// é possível passar um valor padrão no parâmetro da função para quando for chamada sem o uso dele, assumir aquele valor definido
// caso passe um valor, o mesmo será o novo valor assumido
// Ex:
const contagemRegressiva = (inicio = 3) => {
    while (inicio > 0) {
        inicio--;
        console.log(inicio);
    }
    console.log('Fim!');
};
contagemRegressiva();
contagemRegressiva(5);
// ======= Rest & Spread ======= //  
// Rest = agrupa N dados 
// Spread = espalha os dados
// Ex:
const numbers = [1, 10, 99, -5, 200, 1034];
console.log(Math.max(...numbers));
// o caso de cima obtém o mesmo resultado desse ==> console.log(Math.max(numbers[0], numbers[1], numbers[2], numbers[3]))
// também existe a possibilidade de passar N parâmetros graças ao Rest, assim agrupando os números
// Ex:
const retornarArray = (...args) => {
    return args;
};
const numeros = retornarArray(1, 2, 3, 4, 5, 6, 7, 8);
console.log(numeros);
// ======= Destructuring Array ======= //  
// o "destructuring" no array tem como função deixar o código mais prático e curto
// Ex:
const caracteristicas = ['Motor Zetec 1.8', 2020, 30];
const [motor, ano] = caracteristicas;
console.log(motor);
console.log(ano);
// o código abaixo é exatamente o mesmo, mas sem o recurso de destructuring 
// const motor = [caracteristicas[0]];
// const ano = [caracteristicas[0]];
// ======= Destructuring Objeto ======= //      
const item = {
    nome: 'SSD',
    preco: 200,
    caracteristicas: {
        w: 'Importado'
    }
};
const { nome: n, preco, caracteristicas: { w } } = item;
console.log(n);
console.log(preco);
console.log(w);
// nome: n ==> o 'n' é um alias, um apelido, ja que a variável 'nome' ja está sendo usada no contexto atual
// o código abaixo é exatamente o mesmo, mas sem o recurso de destructuring 
// const nome = item.nome;
// const preco = item.preco;    
// ======= Promises ======= //  
// "promise" é uma promessa, algo que chegará no futuro
// é uma das formas para trabalhar com assincronismo
// Ex:
function esperar3sPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('3s depois promise...');
        }, 3000);
    });
}
esperar3sPromise().then(dado => console.log(dado));
// Ex de request usando promise:
fetch('https://swapi.dev/api/people/1')
    .then(res => res.json())
    .then(dados => console.log(dados))
    .catch(err => console.log('Catch: ' + err));
const a = 'Teste TS!';
console.log(a);
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
// ======= enums ======= //
// estrutura que define valores pré-definidos
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
//# sourceMappingURL=app.js.map