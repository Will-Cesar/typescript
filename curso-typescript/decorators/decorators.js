"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// ======= Decorators ======= //
// uma declaração especial para adicionar funcionalidades extras a uma declaração de classe, método, acessador, propriedade ou parâmetro
// usa a expressão "@"
// é uma função
// Ex:
let Eletrodomestico = class Eletrodomestico {
    constructor() {
        console.log('novo...');
    }
};
Eletrodomestico = __decorate([
    logarClasse
], Eletrodomestico);
// função que será chamada como um decorator
// a função está recebendo como parâmetro a classe que foi "decorada"
function logarClasse(constructor) {
    console.log(constructor);
}
// ======= Decorator Factory ======= //
// é uma função que retorna a expressão que será executada
// Ex:
let Foo = class Foo {
};
Foo = __decorate([
    decoratorEx('teste', 123)
], Foo);
function decoratorEx(a, b) {
    return function (_) {
        console.log(a + ' ' + b);
    };
}
//# sourceMappingURL=decorators.js.map