// ======= Namespaces ======= //    
// esquema de organização onde não ocorre o problema de duplicação de nomes com outros objetos dentro do contexto
// Ex:
var Areas;
(function (Areas) {
    var PI = 3.14;
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
    var Area;
    (function (Area) {
        var PI = 3.14;
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
