const path = require('path');

module.exports = {
entry: './src/index.js',  //Punto de entrada de la aplicación
output: {
    filename: 'bundle.js', //Nombre del archivo de salida
    path: path.resolve(__dirname, 'dist' ), //Carpetqa de salida
},
module: {
    rules: [
        {
            test: /\.css$/, //regex para identificar archivos css
            use: ['style-loader, css-loader'], //loaders para procesar archivos css
        }, 
        {
            test: /\.js$/, //regex para identificar archivos js
            exclude: /node_modules/, //excluir la carpeta node_modules
            use: {
                loader: 'babel-loader', //loader para llevar js moderno a js antiguo para que sea compatible con todos los navegadores
                options: {
                    presets: ['@babel/preset-env'],
                },
            },
        },
    ],
},
devtool: 'source-map', //genera mapas de codigo para facilitar la depuración
devServer: {
    contentBase: path.resolve(__dirname, 'dist'), //carpeta desde el cual el servidor agarrará los archivos
    compress: true, //habilitar compresión gzip
    port:9000, //puerto de servidor de desarrollo
},
};