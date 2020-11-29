// ======= Decorators ======= //
// uma declaração especial para adicionar funcionalidades extras a uma declaração de classe, método, acessador, propriedade ou parâmetro
// usa a expressão "@"
// é uma função
// Ex:
@logarClasse
class Eletrodomestico {
    constructor() {
        console.log('novo...');
    }
}
// função que será chamada como um decorator
// a função está recebendo como parâmetro a classe que foi "decorada"
function logarClasse(constructor: Function) {
    console.log(constructor);
}


// ======= Decorator Factory ======= //
// é uma função que retorna a expressão que será executada
// Ex:
@decoratorEx('teste', 123)
class Foo {}

function decoratorEx(a: string, b: number) {
    return function(_: Function): void {
        console.log(a + ' ' + b);
    } 
}

// Desafio Decorator perfilAdmin
const usuarioLogado = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: false
}

@perfilAdmin
class MudancaAdministrativa {
    critico() {
        console.log('Algo crítico foi alterado!')
    }
}
 
new MudancaAdministrativa().critico()

type Construtor = { new(...args: any[]): {} }

// resolução do desafio
function perfilAdmin<T extends Construtor>(construtor: T) {
    return class extends construtor {
        constructor(...args: any[]) {
            super(...args);
            if (!usuarioLogado || usuarioLogado.admin) {
                throw new Error('Sem permissão!')
            }
        }
    }
}


// ======= Decorator de método ======= //
class ContaCorrente {
    private saldo: number;

    constructor(saldo: number) {
        this.saldo = saldo;
    }

    @congelar
    sacar(valor: number) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            return true;
        }
        else {
            return false;
        }
    }

    @congelar
    getSaldo() {
        return this.saldo;
    }
}

const cc = new ContaCorrente(10248.57);
cc.sacar(5000);
console.log(cc.getSaldo());

function congelar(alvo: any, nomePropriedade: string, descritor: PropertyDescriptor) {
    console.log(alvo);
    console.log(nomePropriedade);
    descritor.writable = false;
}