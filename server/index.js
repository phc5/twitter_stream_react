import express from 'express';
import webpack from 'webpack';
import path from 'path';
import dbConfig from './config/db';
import middlewareConfig from './config/middleware';
import config from '../webpack.config'
import { TwitterRoutes } from './modules';

let app = express();
let compiler = webpack(config);

dbConfig();
middlewareConfig(app);


app.use(require('webpack-dev-middleware')(compiler, {
	publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));
app.use('/twitter', [ TwitterRoutes ]);

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../src/index.html'));
});


app.listen(3000, (err) => {
	if(err) console.log(err);
	console.log('Listening at http://localhost:3000');
})