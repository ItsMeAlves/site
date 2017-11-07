const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlConfig = new HtmlWebpackPlugin({
	inject: 'body',
	filename: 'index.html',
	template: path.join(__dirname, 'src', 'index.html')
});

const config = {
	entry: path.join(__dirname, 'src', 'index.js'),
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
	plugins: [htmlConfig],
	devServer: {
		port: 8000
	}
};


module.exports = config;