const path = require('path');
const autoprefixer = require('autoprefixer');

const config = {
    resolve: {
        modules: [path.resolve(__dirname, './client'), 'node_modules'],
        extensions: ['.js', '.jsx', '.json', 'scss'],
        alias: {
            shared: path.resolve(__dirname, './client/shared')
        }
    },
    entry: {
        index: ['babel-polyfill', './client/index.jsx']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                loader: 'babel-loader',
                exclude: [
                    /node-modules/,
                    /\.(spec.js)?$/
                ],
                options: {
                    presets: ['react', 'stage-0', ['env', { target: { browsers: ['last 2 browsers'] } }]],
                    plugins: ['transform-class-properties']
                }
            },
            {
                test: /\.(cs|scss)$/,
                use: [
                    'style-loader',
                    'css-loader?sourceMap',
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            plugins: [autoprefixer]
                        }
                    },
                    'resolve-url-loader',
                    'sass-loader?sourceMap'
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.png$/,
                exclude: /node_modules/,
                loader: 'file-loader',
                options: {
                    name: '[path][name]-[hash:8].[ext]'
                }
            }
        ]
    }
};

module.exports = config;
