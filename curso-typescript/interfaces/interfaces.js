"use strict";
function saudarComOla(pessoa) {
    console.log('Olá, ' + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = 'William';
}
const pessoa = {
    nome: 'Will',
    idade: 23,
    saudar(sobrenome) {
        console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`);
    }
};
// saudarComOla({ nome: 'Wilson', idade: 27, xyz: true });
pessoa.saudar('Teste');
// ======= Usando interfaces no contexto de classes ======= //
// Ex:
class Cliente {
    constructor() {
        this.nome = '';
        this.ultimaCompra = new Date;
    }
    saudar(sobrenome) {
        console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`);
    }
}
const meuCliente = new Cliente;
meuCliente.nome = 'Han';
saudarComOla(meuCliente);
meuCliente.saudar('Solo');
console.log(meuCliente.ultimaCompra);
let potencia;
potencia = function (base, exp) {
    return Math.pow(base, exp);
};
console.log(`Resultado da potência: ${potencia(3, 10)}`);
// "implements" implementa uma interface dentro de uma classe, assim a classe precisa utilizar as propriedades declaras na interface obrigatoriamente
class RealA {
    a() { }
}
class RealB {
    a() { }
    b() { }
}
class RealACB {
    a() { }
    b() { }
    c() { }
}
class AbstractABD {
    a() { }
    b() { }
}
//# sourceMappingURL=interfaces.js.map