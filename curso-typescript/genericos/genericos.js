"use strict";
// ======= Generics ======= //
// capaz de criar um componente que pode funcionar em vários tipos, em vez de em um único
// Os genéricos nos permitem escrever uma função que pode assumir qualquer tipo e transformar nossa função com base nesse tipo.
// uso da sintaxe '<T>'
// Ex:
function echo(objeto) {
    return objeto;
}
console.log(echo('Teste Echo').length);
// é possível tipar a função para o tipo desejado no momento da chamada da mesma (deixar a função explícita)
console.log(echo(27));
// ======= Usando generics com array ======= //
// Ex:
function imprimir(args) {
    args.forEach(el => console.log(el));
}
imprimir([1, 2, 3]);
imprimir([4, 5, 6]);
imprimir(['1', '2', '3']);
imprimir([
    { nome: 'Teste Aluno', idade: 10 },
    { nome: 'Teste Aluno 2', idade: 20 },
    { nome: 'Teste Aluno 3', idade: 30 },
]);
// ======= Usando generics com Classe ======= //
// <T, R> => é possível passar N "parâmetros" genéricos dentro da sua classe
// o valor (tipo) declarado em cada parâmetro define o tipo da propriedade
// Ex:
class OperacaoBinaria {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
}
class SomaBinaria extends OperacaoBinaria {
    executar() {
        return this.operando1 + this.operando2;
    }
}
console.log(new SomaBinaria(3, 4).executar());
// Outro ex:
class DiferencaEntreDatas extends OperacaoBinaria {
    getTime(data) {
        let { dia, mes, ano } = data;
        return new Date(`${mes}/${dia}/${ano}`).getTime();
    }
    executar() {
        const t1 = this.getTime(this.operando1);
        const t2 = this.getTime(this.operando2);
        const diferenca = Math.abs(t1 - t2);
        const dia = 1000 * 60 * 60 * 24;
        return `${Math.ceil(diferenca / dia)} dia(s)`;
    }
}
const d1 = new Data(1, 2, 2020);
const d2 = new Data(7, 2, 2020);
console.log(new DiferencaEntreDatas(d1, d2).executar());
// Desafio
// Atributo: fila (array)
// Métodos: entrar, proximo, imprimir
class Fila {
    constructor(...args) {
        this.fila = args;
    }
    entrar(elemento) {
        this.fila.push(elemento);
    }
    proximo() {
        if (this.fila.length >= 0 && this.fila[0]) {
            const primeiro = this.fila[0];
            this.fila.splice(0, 1);
            return primeiro;
        }
        else {
            return null;
        }
    }
    imprimir() {
        console.log(this.fila);
    }
}
const fila = new Fila('Will', 'Elvis', 'Lucas');
fila.imprimir();
// ======= Restrições (Constraints) ======= //
// com o "extends" é criado uma restrição para o generics
// assim não podendo passar qualquer tipo como parâmetro na classe
// Ex:
class Fila2 {
    constructor(...args) {
        this.fila = args;
    }
    imprimir() {
        console.log(this.fila);
    }
}
// Desafio Mapa
// Array de objetos (Chave/Valor) -> itens
// Métodos: obter(Chave), colocar({ C, V })
// limpar(), imprimir()
//# sourceMappingURL=genericos.js.map