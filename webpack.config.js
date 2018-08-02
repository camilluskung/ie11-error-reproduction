const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const MODERN_BROWSERS = [
	'Edge >= 16',
	'Firefox >= 60',
	'Chrome >= 61',
	'Safari >= 10.1',
	'Opera >= 48',
  'iOS >= 10.3',
  'IE 11',
];

function absPathToImportPath(p) {
	return path
		.relative(__dirname, p)
		.split(path.sep)
		.join(path.posix.sep);
}

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$|\.mjs$/,
        exclude: s => /node_modules/.test(absPathToImportPath(s)),
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                modules: false,
                targets: undefined,
                // {
                //       browsers: MODERN_BROWSERS,
                //     }
              },
            ],
          ],
        },
      },
      {
        test: /\.jsx?$|\.mjs$/,
        include: s =>
          /node_modules\/|@polymer\/|@webcomponents\/shadycss/.test(absPathToImportPath(s)),
        loader: 'babel-loader',
        options: {
          babelrc: false,
          sourceType: 'unambiguous',
          presets: [
            [
              '@babel/preset-env',
              {
                modules: false,
                targets:  undefined,
                // {
                //       browsers: MODERN_BROWSERS,
                //     }
              },
            ],
          ],
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: "head"
    })
  ]
};