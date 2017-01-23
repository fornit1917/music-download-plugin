var webpack = require("webpack");

module.exports = function (options) {
    var plugins = [];
    if (!options.dev) {
        plugins.push(
            new webpack.DefinePlugin({
                "process.env": {
                    "NODE_ENV": JSON.stringify("production")
                }
            })
        );
        plugins.push(new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        }));
    }

    return {
        entry: "./js/downloader.js",
        output: { path: __dirname, filename: "dist/downloader.js" },
        plugins: plugins,
        module: {
            loaders: [
                {
                    test: /.js/,
                    loader: "babel-loader",
                    exclude: /node_modules/,
                    query: {
                        presets: [
                            ["es2015", { modules: false }]
                        ]
                    }
                }
            ]
        },
    };
};
