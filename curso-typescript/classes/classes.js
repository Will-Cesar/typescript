// ======= Classe ======= //
// classe no es6 é um detalhe de sintaxe, é uma forma diferente de escrever uma função voltada a orientação a objeto
// Ex:
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Data = /** @class */ (function () {
    function Data(dia, mes, ano) {
        if (dia === void 0) { dia = 1; }
        if (mes === void 0) { mes = 1; }
        if (ano === void 0) { ano = 1970; }
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    return Data;
}());
var aniversario = new Data(3, 11, 1991);
console.log(aniversario);
var dataCasamento = new Data; // caso não passe nenhum parâmetro é possível omitir o "()"
console.log(dataCasamento);
// Exemplo anterior, mas de forma simplificada utilizando o "public", assim não precisa repetir o mesmo código dentro do construtor:
var Data2 = /** @class */ (function () {
    function Data2(dia, mes, ano) {
        if (dia === void 0) { dia = 1; }
        if (mes === void 0) { mes = 1; }
        if (ano === void 0) { ano = 1970; }
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    return Data2;
}());
var aniversario2 = new Data2(1, 4, 1997);
console.log(aniversario2);
// ======= Classes e métodos ======= //
// é possível criar uma classe com um método dentro da mesma, assim chamando esse método quando quiser
// Ex:
var Produto = /** @class */ (function () {
    function Produto(nome, preco, desconto) {
        if (desconto === void 0) { desconto = 0; }
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    Produto.prototype.resumo = function () {
        return this.nome + " custa R$" + this.precoComDesconto() + " (" + this.desconto * 100 + "% off)";
    };
    // também é public mesmo não declarando o "public"
    Produto.prototype.precoComDesconto = function () {
        return this.preco * (1 - this.desconto);
    };
    return Produto;
}());
var prod1 = new Produto('Caneta Bic Preta', 4.20);
prod1.desconto = 0.06;
console.log(prod1.resumo());
// ======= Modificadores de acesso ======= //
// tipos: 
// - public: visivel para todos e transmitido por herança
// - protected: visivel para classe e transmitido por herança (igual o private + transmitido por herança)
// - private: visivel apenas dentro da classe e NÃO transmitido por herança
// Ex:
var Carro = /** @class */ (function () {
    function Carro(marca, modelo, velocidadeMaxima) {
        if (velocidadeMaxima === void 0) { velocidadeMaxima = 200; }
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0; // apenas a classe "Carro" tem o controle dessa variável, pois a mesma é privada
    }
    // private alterarVelocidade(delta: number): string {
    Carro.prototype.alterarVelocidade = function (delta) {
        var novaVelocidade = this.velocidadeAtual + delta;
        var velocidadeValida = novaVelocidade >= 0
            && novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return "Velocidade atual do " + this.modelo + ": " + this.velocidadeAtual;
    };
    Carro.prototype.acelerar = function () {
        return this.alterarVelocidade(5);
    };
    Carro.prototype.frear = function () {
        return this.alterarVelocidade(-5);
    };
    return Carro;
}());
var carro1 = new Carro('Ford', 'Ka', 185);
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
var Ferrari = /** @class */ (function (_super) {
    __extends(Ferrari, _super);
    function Ferrari(// quando é criado um novo construtor em uma classe que contém herança, é necessário o uso do "Super" e passar os parametros para que o construtor da classe pai seja executado
    modelo, velocidadeMaxima) {
        return _super.call(this, 'Ferrari', modelo, velocidadeMaxima) || this;
    }
    Ferrari.prototype.acelerar = function () {
        return this.alterarVelocidade(20);
    };
    Ferrari.prototype.frear = function () {
        return this.alterarVelocidade(-15);
    };
    return Ferrari;
}(Carro));
var f40 = new Ferrari('F40', 324);
console.log(f40.marca + " " + f40.modelo);
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
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.areaCirc = function (raio) {
        return this.PI * raio * raio;
    };
    Matematica.PI = 3.1416;
    return Matematica;
}());
console.log(Matematica.areaCirc(4));
// ======= Classe abstrata ======= //
// não pode ser instanciada
// uma classe abstrata é feita para ser herdada
// Ex:
var Calculo = /** @class */ (function () {
    function Calculo() {
        this.resultado = 0;
    }
    Calculo.prototype.getResultado = function () {
        return this.resultado;
    };
    return Calculo;
}());
var Soma = /** @class */ (function (_super) {
    __extends(Soma, _super);
    function Soma() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Soma.prototype.executar = function () {
        var numeros = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            numeros[_i] = arguments[_i];
        }
        this.resultado = numeros.reduce(function (total, valorAtual) { return total + valorAtual; });
    };
    return Soma;
}(Calculo));
var Multiplicacao = /** @class */ (function (_super) {
    __extends(Multiplicacao, _super);
    function Multiplicacao() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Multiplicacao.prototype.executar = function () {
        var numeros = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            numeros[_i] = arguments[_i];
        }
        this.resultado = numeros.reduce(function (total, valorAtual) { return total * valorAtual; });
    };
    return Multiplicacao;
}(Calculo));
var c1 = new Soma;
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());
// ======= Construtor privado & Singleton ======= //
// Singleton é quando você quer trabalhar apenas um uma instância
// Ex:
var Unico = /** @class */ (function () {
    function Unico() {
    }
    Unico.getInstance = function () {
        return Unico.instance;
    };
    Unico.prototype.agora = function () {
        return new Date;
    };
    Unico.instance = new Unico;
    return Unico;
}());
console.log(Unico.getInstance().agora());
// ======= Somente Leitura ======= //
// readonly - utilizado para propriedades de somente leitura
// Ex:
var Aviao = /** @class */ (function () {
    function Aviao(modelo, prefixo) {
        this.prefixo = prefixo;
        this.modelo = modelo;
    }
    return Aviao;
}());
var turboHelice = new Aviao('Tu-114', 'PT-ABC');
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
var Moto = /** @class */ (function () {
    function Moto(nome) {
        this.velocidade = 0;
    }
    Moto.prototype.buzinar = function () {
        console.log('Toooooooooot!');
    };
    Moto.prototype.acelerar = function (delta) {
        this.velocidade = this.velocidade + delta;
    };
    return Moto;
}());
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
var Objeto2D = /** @class */ (function () {
    function Objeto2D() {
        this.base = 0;
        this.altura = 0;
    }
    return Objeto2D;
}());
var Retangulo = /** @class */ (function (_super) {
    __extends(Retangulo, _super);
    function Retangulo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Retangulo.prototype.area = function () {
        return this.base * this.altura;
    };
    return Retangulo;
}(Objeto2D));
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
var Estagiario = /** @class */ (function () {
    function Estagiario() {
        this._primeiroNome = '';
    }
    Object.defineProperty(Estagiario.prototype, "primeiroNome", {
        get: function () {
            return this._primeiroNome;
        },
        set: function (valor) {
            if (valor.length >= 3) {
                this._primeiroNome = valor;
            }
            else {
                this._primeiroNome = '';
            }
        },
        enumerable: true,
        configurable: true
    });
    return Estagiario;
}());
