"use strict";
// ======= noEmitOnError ======= // 
// propriedade setada no tsconfig.json permite ou não a compilação do arquivo caso tenha erro 
// "noEmitOnError": true ou false 
// ======= Target ======= //
// propriedade que diz qual é a versão do javascript que será usada no arquivo compilado
// "target": "es5"
// ======= Source Map ======= //
/*
    propriedade que na hora da compilação do arquivo cria um novo arquivo js.map
    esse arquivo é a cópia exata do arquivo ts, onde pode ser visto no devTools do navegador e ser debuggado
*/
// "sourceMap": true
// ======= Diretório de Saída ======= //
// propriedade onde é possível setar um diretório para armazenar os arquivos compilados
// "outDir": "./build"
// ======= Arquivo de Saída ======= //
// propriedade onde é possivel criar a saída de um arquivo com todos os códigos de compilados, tudo em um só arquivo
// mudar a propriedade "module": "commonjs" para "system"
// "outFile": "./build/app.js"  
//# sourceMappingURL=compilador.js.map