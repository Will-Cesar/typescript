"use strict";
// ======= Namespaces ======= //    
// esquema de organização onde não ocorre o problema de duplicação de nomes com outros objetos dentro do contexto
// organização feita com objetos
// também é possível utilizar Namespace em multiplos arquivos, utilizando o mesmo nome
// não há necessidade de loaders, o próprio typescript consegue compilar o mesmo para funcionar no browser
// Ex:
var Areas;
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
//# sourceMappingURL=namespaces.js.map