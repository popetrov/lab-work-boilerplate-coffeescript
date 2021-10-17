const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.coffee',
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.coffee$/,
				loader: 'coffee-loader',
			},
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					// Translates CSS into CommonJS
					'css-loader',
					// Compiles Sass to CSS
					'sass-loader',
				],
			},
			{
				test: /\.css$/i,
				use: [
					MiniCssExtractPlugin.loader,
					// Translates CSS into CommonJS
					'css-loader',
				],
			},
			{
				test: /\.html$/i,
				loader: 'html-loader',
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', 'coffee'],
		alias: {
			'~': path.resolve(__dirname, './src'),
		},
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js',
		clean: true,
	},
	plugins: [
		new MiniCssExtractPlugin(),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			scriptLoading: 'blocking',
			inject: 'body',
		}),
	],
};
