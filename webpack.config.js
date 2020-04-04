module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets:['@babel/preset-env']
                    }
                }
            },
            {
                test:  /\.json$/,
                exclude: /node_modules/,
                use: {
                    // included by default (https://webpack.js.org/loaders/json-loader/)
                    loader: 'json-loader'
                }
            }
        ]
    }
};