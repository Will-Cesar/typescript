// ======= Arrow Function ======= //
// tem como objetivo principal obter uma sinxate reduzida da função
// Ex:
var subtrair = function (N1, N2) {
    return N1 - N2;
};
// ou de forma simplificada
var subtrair2 = function (N1, N2) { return N1 - N2; };
console.log(subtrair2(2, 3));
// O contexto de "This" varia entre funções normais e arrow function
// em uma função "normal", o valor do "this" é oq se apresenta dentro do escopo da função
// em uma arrow function, o valor do "this" é o escopo global, é o valor que está associado fora da função
// ======= Parâmetro padrão ======= //  
// é possível passar um valor padrão no parâmetro da função para quando for chamada sem o uso dele, assumir aquele valor definido
// caso passe um valor, o mesmo será o novo valor assumido
// Ex:
var contagemRegressiva = function (inicio) {
    if (inicio === void 0) { inicio = 3; }
    while (inicio > 0) {
        inicio--;
        console.log(inicio);
    }
    console.log('Fim!');
};
contagemRegressiva();
contagemRegressiva(5);
// ======= Rest & Spread ======= //  
// Rest = agrupa N dados 
// Spread = espalha os dados
// Ex:
var numbers = [1, 10, 99, -5, 200, 1034];
console.log(Math.max.apply(Math, numbers));
// o caso de cima obtém o mesmo resultado desse ==> console.log(Math.max(numbers[0], numbers[1], numbers[2], numbers[3]))
// também existe a possibilidade de passar N parâmetros graças ao Rest, assim agrupando os números
// Ex:
var retornarArray = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
};
var numeros = retornarArray(1, 2, 3, 4, 5, 6, 7, 8);
console.log(numeros);
// ======= Destructuring Array ======= //  
// o "destructuring" no array tem como função deixar o código mais prático e curto
// Ex:
var caracteristicas = ['Motor Zetec 1.8', 2020, 30];
var motor = caracteristicas[0], ano = caracteristicas[1];
console.log(motor);
console.log(ano);
// o código abaixo é exatamente o mesmo, mas sem o recurso de destructuring 
// const motor = [caracteristicas[0]];
// const ano = [caracteristicas[0]];
// ======= Destructuring Objeto ======= //      
var item = {
    nome: 'SSD',
    preco: 200,
    caracteristicas: {
        w: 'Importado'
    }
};
var n = item.nome, preco = item.preco, w = item.caracteristicas.w;
console.log(n);
console.log(preco);
console.log(w);
// nome: n ==> o 'n' é um alias, um apelido, ja que a variável 'nome' ja está sendo usada no contexto atual
// o código abaixo é exatamente o mesmo, mas sem o recurso de destructuring 
// const nome = item.nome;
// const preco = item.preco;    
// ======= Promises ======= //  
// "promise" é uma promessa, algo que chegará no futuro
// é uma das formas para trabalhar com assincronismo
// Ex:
function esperar3sPromise() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve('3s depois promise...');
        }, 3000);
    });
}
esperar3sPromise().then(function (dado) { return console.log(dado); });
// Ex de request usando promise:
fetch('https://swapi.dev/api/people/1')
    .then(function (res) { return res.json(); })
    .then(function (dados) { return console.log(dados); });
