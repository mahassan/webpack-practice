const path = require("path");
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
                //css-loader will load first
                //style-loader will load second
                // css-loader will convert style in JS
                //style-loader will take the style in JS and inject in into DOM
            }
        ]
    }
}