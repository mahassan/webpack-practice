const path = require("path");
const html = require("html-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main-[contenthash].js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',  //3
                    'css-loader',  //2
                    'sass-loader' //1
                ]
                //css-loader will load first
                //style-loader will load second
                // css-loader will convert style in JS
                //style-loader will take the style in JS and inject in into DOM
                //sass-loader will convert sass in CSS
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin(
        { template: './template.html' })]
}