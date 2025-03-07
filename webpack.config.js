module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            },
        ]
    }
}