// ======= Interfaces ======= //
// interfaces são estruturas que definem sintaxes que precisam ser seguidas
// classes que são derivadas de uma interface precisam seguir a estrutura determinada pela interface
// podem incluir propriedades e métodos usando function ou arrow function
// Obs: O "?" significa que a propriedade é opcional
// Obs: quando uma propriedade é dinâmica, ou seja, não tem um nome fixo, é utilizado o "[]"
// Ex:
interface Humano {
    nome: string;
    idade?: number;
    [prop: string]: any;
    saudar(sobrenome: string): void
}

function saudarComOla(pessoa: Humano) {
    console.log('Olá, ' + pessoa.nome);
} 

function mudarNome(pessoa: Humano) {
    pessoa.nome = 'William';
}

const pessoa: Humano = {
    nome: 'Will',
    idade: 23,
    saudar(sobrenome: string) {
        console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`)
    }
}

// saudarComOla({ nome: 'Wilson', idade: 27, xyz: true });
pessoa.saudar('Teste');


// ======= Usando interfaces no contexto de classes ======= //
// Ex:
class Cliente implements Humano {
    nome: string = '';
    ultimaCompra: Date = new Date;

    saudar(sobrenome: string) {
        console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`)
    }
} 

const meuCliente = new Cliente;
meuCliente.nome = 'Han';
saudarComOla(meuCliente);
meuCliente.saudar('Solo');
console.log(meuCliente.ultimaCompra);


// ======= Usando Interface Função ======= //
// Ex:
interface FuncaoCalculo {
    (a: number, b: number): number
}

let potencia: FuncaoCalculo;

potencia = function(base: number, exp: number): number {
    return Math.pow(base, exp);
}

console.log(`Resultado da potência: ${potencia(3, 10)}`);


// ======= Usando Herança com Interface ======= //
// uma interface pode extender mais de uma interface e também pode implementar mais de uma interface
// Ex:
interface A {
    a(): void
}

interface B {
    b(): void
}

// "extends" herda as propriedades de uma interface para outra
interface ABC extends A, B {
    c(): void
}

// "implements" implementa uma interface dentro de uma classe, assim a classe precisa utilizar as propriedades declaras na interface obrigatoriamente
class RealA implements A {
    a(): void {}
}

class RealB implements A, B {
    a(): void {}
    b(): void {}
}

class RealACB implements ABC {
    a(): void {}
    b(): void {}
    c(): void {}
}

abstract class AbstractABD implements A, B {
    a(): void {}
    b(): void {}
    abstract d(): void
}