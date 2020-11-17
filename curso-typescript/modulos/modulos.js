"use strict";
// ======= Modulos ======= //    
// modulos são executados no seu próprio escopo, e não em um escopo global
// significa que variáveis, funções, classes e etc. declaradas no módulo não são visíveis fora desse módulo, a não ser que o módulo exporte de forma explícita
// é necessário a utilização de uma declaração explícita para herdar um módulo
// para ao esquema de módulos funcionar no browser, é necessário o uso da biblioteca SystemJS (ou configurar no webpack)
// nesse caso foi instalado a versão 0.21.6 do SystemJS
// Ex:
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { areaRetangulo } from './retangulo';
// com o uso do "default" no módulo, não é necessário utilizar exatamente o mesmo nome para refenciar ele 
const retangulo_1 = __importDefault(require("./retangulo"));
const circunferencia_1 = require("./circunferencia");
console.log(retangulo_1.default(7, 8));
console.log(circunferencia_1.areaCircunferencia(2));
// importando um módulo pelo padrão commonjs
const { digaOi } = require('./novo');
console.log(digaOi('Will'));
//# sourceMappingURL=modulos.js.map