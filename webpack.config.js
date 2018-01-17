var path = require("path");

var DIST_DR = path.resolve(__dirname , "dist");
var SRC_DIR = path.resolve(__dirname , "src");

var config = {
    entry:  SRC_DIR + "/app/index.js",
    output: {
        path: DIST_DR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,     //  // Match both .js and .jsx files
                exclude: /node_modules/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["es2015", "react", "stage-2"]
                }
            }
        ]
    }
};

module.exports = config;
