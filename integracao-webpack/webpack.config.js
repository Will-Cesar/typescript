const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'production', // é possível configurar para 'development', que configura para o modo desenvolvimento
    entry: './src/main.ts', // arquivo de entrada
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9000,
        hot: true
    },
    output: { // destino do arquivo
        filename: 'app.min.js',
        path: path.join(__dirname, 'dist')
    },
    plugins: [
        new CopyPlugin({ // copia os arquivos de uma pasta determinada
            patterns: [
                { from: 'public' },
            ]
        })
    ],
    resolve: { // extensões dos arquivos para compilar 
        extensions: [ '.ts', '.js' ]
    },
    module: {
        rules: [{ // regras de como o build será implementado
            test: /\.ts$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    }
}