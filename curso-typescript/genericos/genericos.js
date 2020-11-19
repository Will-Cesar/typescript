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
//# sourceMappingURL=genericos.js.map