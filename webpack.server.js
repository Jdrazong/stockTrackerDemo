const path = require('path');

const config = {
    target: 'node',
    entry: './server/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    node: {
        __dirname: false
    },
    module: {
        rules: [
            {
                test: /\.(js)?$/,
                loader: 'babel-loader',
                exclude: /node-modules/,
                options: {
                    presets: ['stage-0', ['env']]
                }
            }
        ]
    }
};

module.exports = config;
