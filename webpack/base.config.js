const Glob = require('glob');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const Webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Config = require("./config.js").default;

const ROOT_PATH = process.cwd();

let { folderName } = Config;
if (folderName) { folderName += "/" }

module.exports = function (env) {
    return {
        target: 'web',
        entry: {
            main: Glob.sync(ROOT_PATH + `/${folderName}+(css|js)/+(*.js|*.css|*.scss)`)
        },
        resolve: {
            extensions: ['.js', '.jsx', '.css', '.scss'],
            alias: {
                vue: 'vue/dist/vue.js'
            }
        },
        output: {
            path: ROOT_PATH + `/${folderName}dist`,
            chunkFilename: '[name].js',
            publicPath: ROOT_PATH
        },
        plugins: [
            new MiniCssExtractPlugin(),
            new VueLoaderPlugin(),
            new Webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery'
            })
        ],
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                {
                    test: /\.(js|jsx)$/,
                    use: 'babel-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.(gif|png|jpe?g|svg)$/i,
                    use: 'file-loader?name=images/[name].[ext]'
                },
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader
                        },
                        {
                            loader: 'css-loader',
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                postcssOptions: {
                                    plugins: function () {
                                        return [
                                            require('precss'),
                                            require('autoprefixer')
                                        ];
                                    }
                                }
                            }
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                },
            ]
        }

    };
};
