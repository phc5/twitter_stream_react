import mongoose from 'mongoose';

export default () => {
	mongoose.Promise = global.Promise;

	mongoose.connect('mongodb://localhost:27017/twitter_js');
	mongoose.connection
		.once('open', () => console.log('MongoDB running...'))
		.on('error', err => console.log(err));
};