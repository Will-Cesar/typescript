"use strict";
// ======= Classe ======= //
// classe no es6 é um detalhe de sintaxe, é uma forma diferente de escrever uma função voltada a orientação a objeto
// Ex:
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(3, 11, 1991);
console.log(aniversario);
const dataCasamento = new Data; // caso não passe nenhum parâmetro é possível omitir o "()"
console.log(dataCasamento);
// Exemplo anterior, mas de forma simplificada utilizando o "public", assim não precisa repetir o mesmo código dentro do construtor:
class Data2 {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario2 = new Data2(1, 4, 1997);
console.log(aniversario2);
// ======= Classes e métodos ======= //
// é possível criar uma classe com um método dentro da mesma, assim chamando esse método quando quiser
// Ex:
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    resumo() {
        return `${this.nome} custa R$${this.precoComDesconto()} (${this.desconto * 100}% off)`;
    }
    // também é public mesmo não declarando o "public"
    precoComDesconto() {
        return this.preco * (1 - this.desconto);
    }
}
const prod1 = new Produto('Caneta Bic Preta', 4.20);
prod1.desconto = 0.06;
console.log(prod1.resumo());
// ======= Modificadores de acesso ======= //
// tipos: 
// - public: visivel para todos e transmitido por herança
// - protected: visivel para classe e transmitido por herança (igual o private + transmitido por herança)
// - private: visivel apenas dentro da classe e NÃO transmitido por herança
// Ex:
class Carro {
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0; // apenas a classe "Carro" tem o controle dessa variável, pois a mesma é privada
    }
    // private alterarVelocidade(delta: number): string {
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0
            && novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return `Velocidade atual do ${this.modelo}: ${this.velocidadeAtual}`;
    }
    acelerar() {
        return this.alterarVelocidade(5);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
}
const carro1 = new Carro('Ford', 'Ka', 185);
console.log(carro1.acelerar());
console.log(carro1.acelerar());
console.log(carro1.acelerar());
// ======= Herança ======= //
// reeutiliza os códigos de uma classe em outra
// utiliza a propriedade 'extends'
// por padrão métodos e variáveis 'private' não podem ser acessados diretamente por herança
// o "protected" permite esse acessso direto por herança, e funciona da mesma forma que um 'private'
// transmitido por herança é quando outra classe consegue além de ler, passar valores para métodos 
// Ex:
class Ferrari extends Carro {
    constructor(// quando é criado um novo construtor em uma classe que contém herança, é necessário o uso do "Super" e passar os parametros para que o construtor da classe pai seja executado
    modelo, velocidadeMaxima) {
        super('Ferrari', modelo, velocidadeMaxima);
    }
    acelerar() {
        return this.alterarVelocidade(20);
    }
    frear() {
        return this.alterarVelocidade(-15);
    }
}
const f40 = new Ferrari('F40', 324);
console.log(`${f40.marca} ${f40.modelo}`);
console.log(f40.acelerar());
// ======= Getters & Setters ======= //
// propriedade de 'get' e 'set' de atributos
// não é ncessário criar um nome para o método, ele executa a função get ou set a partir do que foi configurado 
// são métodos, mas não são acessados como atributos
// Ex:
/*
class Pessoa {
    private _idade: number = 0;

    get idade(): number {
        return this._idade;
    }

    set idade(valor: number) {
        if (valor >= 0 && valor <=  120) {
            this._idade = valor;
        }
    }
}

const pessoa1 = new Pessoa;
console.log(pessoa1);
pessoa1.idade = 10;
console.log(pessoa1);
console.log(pessoa1.idade); */
// ======= Membros estáticos ======= //
// quando um atributo é estático, quer dizer que o seu valor é associado a classe e não a cada instância
// com o static é possível acessar o método dentro da classe sem criar uma instância
// quando o atributo e o método estão 'static', quer dizer que ambos estão no nível de acesso da classe e não de cada instância
// Ex:
class Matematica {
    static areaCirc(raio) {
        return this.PI * raio * raio;
    }
}
Matematica.PI = 3.1416;
console.log(Matematica.areaCirc(4));
// ======= Classe abstrata ======= //
// não pode ser instanciada
// uma classe abstrata é feita para ser herdada
// Ex:
class Calculo {
    constructor() {
        this.resultado = 0;
    }
    getResultado() {
        return this.resultado;
    }
}
class Soma extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((total, valorAtual) => total + valorAtual);
    }
}
class Multiplicacao extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((total, valorAtual) => total * valorAtual);
    }
}
let c1 = new Soma;
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());
// ======= Construtor privado & Singleton ======= //
// Singleton é quando você quer trabalhar apenas um uma instância
// Ex:
class Unico {
    constructor() {
    }
    static getInstance() {
        return Unico.instance;
    }
    agora() {
        return new Date;
    }
}
Unico.instance = new Unico;
console.log(Unico.getInstance().agora());
// ======= Somente Leitura ======= //
// readonly - utilizado para propriedades de somente leitura
// Ex:
class Aviao {
    constructor(modelo, prefixo) {
        this.prefixo = prefixo;
        this.modelo = modelo;
    }
}
const turboHelice = new Aviao('Tu-114', 'PT-ABC');
// turboHelice.modelo = 'DC-8'; gera erro pois modelo é apenas para leitura
// Exercício 1 - Classe
// function Moto(nome) {
//     this.nome = nome
//     this.velocidade = 0
//     this.buzinar = function() {
//         console.log('Toooooooooot!')
//     }
//     this.acelerar= function(delta) {
//         this.velocidade = this.velocidade + delta
//     }
// }
// var moto = new Moto('Ducati')
// moto.buzinar()
// console.log(moto.velocidade)
// moto.acelerar(30)
// console.log(moto.velocidade)
class Moto {
    constructor(nome) {
        this.velocidade = 0;
    }
    buzinar() {
        console.log('Toooooooooot!');
    }
    acelerar(delta) {
        this.velocidade = this.velocidade + delta;
    }
}
// Exercício 2 - Herança
// var objeto2D = {
//     base: 0,
//     altura: 0
// }
// var retangulo = Object.create(objeto2D)
// retangulo.base = 5
// retangulo.altura = 7
// retangulo.area = function() {
//     return this.base * this.altura
// }
// console.log(retangulo.area())
class Objeto2D {
    constructor() {
        this.base = 0;
        this.altura = 0;
    }
}
class Retangulo extends Objeto2D {
    area() {
        return this.base * this.altura;
    }
}
// Exercício 3 - Getters & Setters
// var estagiario = {
//     _primeiroNome: ''
// }
// Object.defineProperty(estagiario, 'primeiroNome', {
//     get: function () {
//         return this._primeiroNome
//     },
//     set: function (valor) {
//         if (valor.length >= 3) {
//             this._primeiroNome = valor
//         } else {
//             this._primeiroNome = ''
//         }
//     },
//     enumerable: true,
//     configurable: true
// })
// console.log(estagiario.primeiroNome)
// estagiario.primeiroNome = 'Le'
// console.log(estagiario.primeiroNome)
// estagiario.primeiroNome = 'Leonardo'
// console.log(estagiario.primeiroNome)
class Estagiario {
    constructor() {
        this._primeiroNome = '';
    }
    get primeiroNome() {
        return this._primeiroNome;
    }
    set primeiroNome(valor) {
        if (valor.length >= 3) {
            this._primeiroNome = valor;
        }
        else {
            this._primeiroNome = '';
        }
    }
}
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
// ======= Namespaces ======= //    
// esquema de organização onde não ocorre o problema de duplicação de nomes com outros objetos dentro do contexto
// também é possível utilizar Namespace em multiplos arquivos, utilizando o mesmo nome
// Ex:
var Areas;
// ======= Namespaces ======= //    
// esquema de organização onde não ocorre o problema de duplicação de nomes com outros objetos dentro do contexto
// também é possível utilizar Namespace em multiplos arquivos, utilizando o mesmo nome
// Ex:
(function (Areas) {
    const PI = 3.14;
    function circunferencia(raio) {
        return PI * Math.pow(raio, 2);
    }
    Areas.circunferencia = circunferencia;
    function retangulo(base, altura) {
        return base * altura;
    }
    Areas.retangulo = retangulo;
})(Areas || (Areas = {}));
console.log(Areas.circunferencia(10));
console.log(Areas.retangulo(10, 20));
// é possível ter um Namespace dentro de outro Namespace
// Ex:
var Geometria;
// é possível ter um Namespace dentro de outro Namespace
// Ex:
(function (Geometria) {
    let Area;
    (function (Area) {
        const PI = 3.14;
        function circunferencia(raio) {
            return PI * Math.pow(raio, 2);
        }
        Area.circunferencia = circunferencia;
        function retangulo(base, altura) {
            return base * altura;
        }
        Area.retangulo = retangulo;
    })(Area = Geometria.Area || (Geometria.Area = {}));
})(Geometria || (Geometria = {}));
console.log(Geometria.Area.circunferencia(5));
console.log(Geometria.Area.retangulo(5, 10));
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