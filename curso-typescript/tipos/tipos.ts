// ======= string ======= //
let nome: string = 'João'
console.log(nome)

// ======= number ======= //
let idade: number = 27
console.log(idade)

// ======= boolean ======= //
let possuiHobbies: boolean = false
console.log(possuiHobbies)

// ======= tipos explicitos ======= //
let minhaIdade
minhaIdade = 27
console.log(typeof minhaIdade)
minhaIdade = 'idade é 27'
console.log(typeof minhaIdade)

/* Observação: 
   quando o tipo é implicito, a não inicialização da variável já com um valor declarado
   determina o tipo da mesma conforme a declaração de valores na propria variável.
*/

// ======= array ======= //
let hobbies: any[] = ['Cozinhar', 'Praticar Esportes']
console.log(hobbies)
console.log(typeof hobbies)

hobbies = [100, 200]

// ======= tuplas ======= //
let endereco: [string, number] = ['Av Principal', 99]
console.log(endereco);

// ======= enums ======= //
// estrutura que define valores pré-definidos
enum Cor {
    Cinza, // = 0 
    Verde, // = 1
    Azul   // = 2
}

let minhaCor: Cor = Cor.Verde;
console.log(minhaCor);

// ======= any ======= //
let carro: any = 'BMW'
console.log(carro)

// ======= funções ======= //
function retornaMeuNome(): string { // diz explicitamente qual o tipo do retorno da função
    return nome
}

console.log(retornaMeuNome())

function digaOi(): void { // deixa explicito que essa função não há retorno
    console.log('Oi')
}

function multiplicar(numA: number, numB: number): number {
    return numA * numB
}

console.log(multiplicar(4, 8))

// ======= tipo função ======= //
// nessa demonstração, foi tipado em uma variável uma função
let calculo: (numeroA: number, numeroB: number) => number
calculo = multiplicar
console.log(calculo(5, 6))

// ======= objetos ======= //
// conforme toda a regra de typescript, uma vez criado um objeto, ja inicializando a variável com propriedades pré definidas
// essa váriavel fica com a tipagem já definida
let usuario: { nome: string, idade: number } = {
    nome: 'João',
    idade: 27
}

// ======= desafio ======= //
/*
    Criar um objeto funcionário com:
    - Array de strings com os nomes dos supervisores
    - Função de bater ponto que recebe a hora (número) e retorna uma string
        -> Ponto normal (<= 8)
        -> Fora do horário (> 8)
*/

let funcionarios: { supervisores: string[], baterPonto: (horas: number) => string } = {
    supervisores: ['Jorge', 'Maria'],
    baterPonto(horario: number): string {
        if (horario <= 8) {
            return 'Ponto normal'
        } else {
            return 'Fora do horário'
        }
    }
}

// ======= Alias ======= //
// um 'tipo' pré definido
type Funcionario = {
    supervisores: string[], 
    baterPonto: (horas: number) => string
}

let funcionarios2: Funcionario = {
    supervisores: ['Jorge', 'Maria'],
    baterPonto(horario: number): string {
        if (horario <= 8) {
            return 'Ponto normal'
        } else {
            return 'Fora do horário'
        }
    }
}

/* O exemplo acima é o mesmo do anterior, mas com o uso do alias, para deixar genérico o tipo */

// ======= Union Types ======= // 
// utiliza o '|' para 'ou', podendo ser dois tipos na mesma variável
let nota: number | string = 10