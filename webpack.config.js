const path = require('path')

module.exports = {
	mode: 'development',
	entry: "./index.js",
	output: {
		filename: "bundle.js",
		path: path.join(__dirname, 'public')
	},
	devServer: {
		contentBase: path.join(__dirname, 'public'),
		port: 8080
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["env", "stage-0", "react"]
					}
				}
			},
			{
				test: /\.jpg$/,
				use: [
					{loader: "url-loader"},
					{loader: "file-loader"}
				]
			}						
		]
	}
}