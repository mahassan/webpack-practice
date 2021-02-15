const path = require("path")
module.exports = {
    //entry meaning where in the input
    entry: '/src/app.js',
    output: {
        filename: 'bundle.js',
        // dirname generates directory name and public is folder where code is based 
        path: path.resolve(__dirname,"public")
    }
}