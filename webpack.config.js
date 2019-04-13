const webpack = require("webpack");


module.exports = function (env, options) {
    var plugins = [];
    const isDev = options.mode === "development";
    if (!isDev) {
        plugins.push(
            new webpack.DefinePlugin({
                "process.env": {
                    "NODE_ENV": JSON.stringify("production")
                }
            })
        );
    }

    return {
        entry: "./js/downloader.js",
        output: { path: __dirname, filename: "dist/downloader.js" },
        plugins: plugins,
        module: {
            rules: [
                {
                    test: /.js/,
                    loader: "babel-loader",
                    exclude: /node_modules/,
                }
            ]
        },
    };
};
