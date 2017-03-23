let express = require('express');
let webpack = require('webpack');
let path = require('path');
let config = require('./webpack.config');

let app = express();
let compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
	publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});


app.listen(3000, (err) => {
	if(err) console.log(err);
	console.log('Listening at http://localhost:3000');
})