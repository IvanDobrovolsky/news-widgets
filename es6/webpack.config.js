const path = require('path'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin');

//Webpack options
const options = {
    entry: './src/main.js',
    output: {
        path: './dest',
        filename: 'js/bundle.js'
    },
    js_files: /\.js?$/,
    dest: {
        path: __dirname + '/dest'
    },
    index: __dirname + '/src/index.html',
    css: __dirname + '/src/assets/css'
};

//Configuration itself
module.exports = {
    entry: options.entry,
    output: options.output,
    module: {
        loaders: [
            //Compiling es6 -> es5
            {
                test: options.js_files,
                loader: 'babel',
                query: {
                    presets: 'es2015'
                }
            }
        ]
    },
    plugins: [
        //Cleaning 'dest' directory everytime before building
        new CleanWebpackPlugin(['dest'], {
            root: __dirname,
            verbose: true,
            dry: false
        }),
        //Copying other files
        new CopyWebpackPlugin([
            //Copy index.html to output 'dest'
            {
                from: options.index
            },
            //Copy css folder to output 'dest/css'
            {
                from: options.css, to: '/css'
            }
        ])
    ],
    devtool: 'source-map'
};