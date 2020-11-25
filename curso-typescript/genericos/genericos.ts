// ======= Generics ======= //
// capaz de criar um componente que pode funcionar em vários tipos, em vez de em um único
// Os genéricos nos permitem escrever uma função que pode assumir qualquer tipo e transformar nossa função com base nesse tipo.
// uso da sintaxe '<T>'
// Ex:

function echo<T>(objeto: T): T {
    return objeto;
}

console.log(echo('Teste Echo').length);
// é possível tipar a função para o tipo desejado no momento da chamada da mesma (deixar a função explícita)
console.log(echo<number>(27));


// ======= Usando generics com array ======= //
// Ex:
function imprimir<T>(args: T[]): void { 
    args.forEach(el => console.log(el));    
}

imprimir([1, 2, 3]);
imprimir<number>([4, 5, 6]);
imprimir(['1','2','3']);

// Ex:
type Aluno = { nome: string, idade: number}
imprimir<Aluno>([
    { nome: 'Teste Aluno', idade: 10 },
    { nome: 'Teste Aluno 2', idade: 20 },
    { nome: 'Teste Aluno 3', idade: 30 },    
]);


// ======= Usando generics com Classe ======= //
// <T, R> => é possível passar N "parâmetros" genéricos dentro da sua classe
// o valor (tipo) declarado em cada parâmetro define o tipo da propriedade
// Ex:
abstract class OperacaoBinaria<T, R> {  
    constructor(
        public operando1: T,
        public operando2: T
    ){}

    abstract executar(): R
}

class SomaBinaria extends OperacaoBinaria<number, number> {
    executar(): number {
        return this.operando1 + this.operando2;
    }
}

console.log(new SomaBinaria(3, 4).executar());

// Outro ex:
class DiferencaEntreDatas extends OperacaoBinaria<Data, string> {
    getTime(data: Data): number {
        let { dia, mes, ano } = data;
        return new Date(`${mes}/${dia}/${ano}`).getTime();
    }

    executar(): string {
        const t1 = this.getTime(this.operando1);
        const t2 = this.getTime(this.operando2);
        const diferenca = Math.abs(t1 - t2);
        const dia = 1000 * 60 * 60 * 24;
        return `${Math.ceil(diferenca/dia)} dia(s)`;
    }
}

const d1 = new Data(1, 2, 2020);
const d2 = new Data(7, 2, 2020);
console.log(new DiferencaEntreDatas(d1, d2).executar());

// Desafio
// Atributo: fila (array)
// Métodos: entrar, proximo, imprimir
class Fila<T> {
    private fila: Array<T>;

    constructor(...args: T[]) {
        this.fila = args;
    }

    entrar(elemento: T) {
        this.fila.push(elemento);
    } 

    proximo(): T | null {
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

const fila = new Fila<string>('Will', 'Elvis', 'Lucas');
fila.imprimir();


// ======= Restrições (Constraints) ======= //
// com o "extends" é criado uma restrição para o generics
// assim não podendo passar qualquer tipo como parâmetro na classe
// Ex:
class Fila2<T extends number | string> {
    private fila: Array<T>;

    constructor(...args: T[]) {
        this.fila = args;
    }

    imprimir() {
        console.log(this.fila);
    }
}

// Desafio Mapa
// Array de Objetos (Chave/Valor) -> itens
// Métodos: obter(Chave), colocar({ C, V })
// limpar(), imprimir()
 
// const mapa = new Mapa<number, string>()
// mapa.colocar({ chave: 1, valor: 'Pedro' })
// mapa.colocar({ chave: 2, valor: 'Rebeca' })
// mapa.colocar({ chave: 3, valor: 'Maria' })
// mapa.colocar({ chave: 1, valor: 'Gustavo' })
 
// console.log(mapa.obter(2))
// mapa.imprimir()
// mapa.limpar()
// mapa.imprimir()