module.exports = {/*
	entry: "./app/App.js",
	output: {
		filename: "public/bundle.js"
	},*/
	entry: "./public/js/application.js",
	output: {
		filename: "public/js/bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel'
			}, {
                test: /\.css$/,
                loader: 'style!css'
            }
		]
	}
}
