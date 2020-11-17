// ======= Namespaces ======= //    
// esquema de organização onde não ocorre o problema de duplicação de nomes com outros objetos dentro do contexto
// organização feita com objetos
// também é possível utilizar Namespace em multiplos arquivos, utilizando o mesmo nome
// não há necessidade de loaders, o próprio typescript consegue compilar o mesmo para funcionar no browser
// Ex:
namespace Areas {
    const PI = 3.14;

    export function circunferencia(raio: number): number {
        return PI * Math.pow(raio, 2);
    }

    export function retangulo(base: number, altura: number): number {
        return base * altura;
    }
}

console.log(Areas.circunferencia(10));
console.log(Areas.retangulo(10, 20));

// é possível ter um Namespace dentro de outro Namespace
// Ex:
namespace Geometria {
    export namespace Area {
        const PI = 3.14;
    
        export function circunferencia(raio: number): number {
            return PI * Math.pow(raio, 2);
        }
    
        export function retangulo(base: number, altura: number): number {
            return base * altura;
        }
    }
}

console.log(Geometria.Area.circunferencia(5));
console.log(Geometria.Area.retangulo(5, 10));