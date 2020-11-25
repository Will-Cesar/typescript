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

