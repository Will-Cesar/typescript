const { series, parallel, src, dest } = require('gulp');
const del = require('del');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const tsify = require('tsify');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

function limparDist() {
    return del(['dist']); // comando para deletar uma pasta, nesse caso, a pasta 'dist'
}

function copiarHTML() {
    return src('public/**/*') // copia arquivos e hierarquia das pastas de dentro da pasta 'public' para a pasta 'dist'
        .pipe(dest('dist'));
}

function gerarJS() {
    return browserify({
        basedir: '.',
        entries: ['src/main.ts'] //compila o arquivo 'main.ts'
    })
    .plugin(tsify) // lê e interpreta o TS 
    .bundle()
    .pipe(source('app.js')) // arquivo gerado a partir do TS
    .pipe(dest('dist')) // envia para a pasta de 'dist'
}

function gerarJSProducao() {
    return src('dist/app.js')
        .pipe(rename('app.min.js')) //renomeia o arquivo
        .pipe(uglify()) // minifica
        .pipe(dest('dist')) // envia para a pasta dist
}

// executa as funções de forma serial
// parallel = executa funções de forma paralela
exports.default = series(
    limparDist,
    parallel(gerarJS, copiarHTML),
    gerarJSProducao
);