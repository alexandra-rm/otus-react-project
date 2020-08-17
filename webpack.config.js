const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    devtool: "source-map",
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
        alias: {
            components: path.resolve(__dirname, "src/components"),
            smart: path.resolve(__dirname, "src/smart"),
            store: path.resolve(__dirname, "src/store"),
            utils: path.resolve(__dirname, "src/utils"),
        },
    },
    devServer: {
        contentBase: "./dist",
    },
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
    ],
};
