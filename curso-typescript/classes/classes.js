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
