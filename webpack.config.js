/**
 * Created by Sa on 6/2/2016.
 */
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html', //template points to our regular index.html file located in our app directory
    filename: 'index.html',//filename just says we want to keep the name index.html.
    inject: 'body'// inject says to inject a script which references the name of the output file (index_bundle.js)
    // of our loaders and put it in the body of this newly created HTML file.
});
/*var DefinePlugin = require('extended-define-webpack-plugin');
var processEnv = new DefinePlugin({
    "process.env": {
        NODE_ENV: JSON.stringify("production")
    }
});*/
module.exports = {
    //First up, telling webpack where the entry point of our application is located.
    // Our object: a property of 'entry' and a value which is an array with a string
    // which points to our root JavaScript file in our app.
    // Webpack allows you to have one or many entry points in your application hence it's an array and not a string.
    //Change as necessary
    entry: [
        './app/index.js'
    ],
    // To tell Webpack which transformations to actually make
    module: {
        /* Each loader needs to be composed of three things.
         * The first is which file type to run the specific transformation on.
         * The next item is which directories should be included or excluded from being transformed
         * The last thing is the specific loader we want to run.
         */
        loaders: [
            //{test: /\.js$/, include: __dirname + '/app', loader: "coffee-loader"}
            {
                test: /\.js$/,
                include:__dirname + '/app',
                loader: "babel-loader",
                query: {
                    presets: ['react', 'es2015'],
                    plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
                }
            },
            // this snippet caused babel to work :)
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                query:
                {
                    presets:['es2015', 'react']
                }
            }
        ]
    },
    output: {
        filename: "index_bundle.js", //the name of the file that Webpack is going to create which contains our new transformed code
        path: __dirname + '/dist' //the specific directory where the new filename (index_bundle.js) is going to be placed.
    },
    plugins: [
        HTMLWebpackPluginConfig,
        new webpack.OldWatchingPlugin()

    ]
};