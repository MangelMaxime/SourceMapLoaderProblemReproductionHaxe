var path = require("path");
var nodeExternals = require('webpack-node-externals');

var isProduction = false;

module.exports = {
    entry: path.join(__dirname, "js", "index.js"),
    mode: isProduction ? "production" : "development",
    devtool: isProduction ? "source-map" : "eval-source-map",
    output: {
        path: path.join(__dirname, "build"),
        filename: "server.js",
        devtoolModuleFilenameTemplate: 'file:///[absolute-resource-path]'
    },
    target: "node",
    externals: [
        nodeExternals()
    ],
    watchOptions: {
        ignored: [
            "./haxe/**/*.hx"
        ]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: "pre",
                use: ["source-map-loader"]
            },
        ]
    }
};
