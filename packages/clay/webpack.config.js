const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const webpackCommonConfig = require('webpack-config-clay');

module.exports = Object.assign(webpackCommonConfig, {
	entry: './src/clay.js',
	output: {
		library: 'clay',
		libraryTarget: 'this',
		filename: './lib/js/clay.js',
	},
	plugins: [
		new webpack.optimize.ModuleConcatenationPlugin(),
		new UglifyJSPlugin(),
	],
});
