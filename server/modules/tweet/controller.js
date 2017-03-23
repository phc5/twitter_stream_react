//import TweetSchema from './model';
import { client, params } from './twitterAuth';

export const hi = async (req, res) => {
	try {
		client.stream('statuses/filter', {track: '#NationalPuppyDay', count: 5}, (stream) => {
			stream.on('data', (tweet) => {
				console.log(tweet.text);
			})
			stream.on('error', (err) => {
				console.log(err);
			})
		})
		return res.status(200).json('helllo');
	} catch (e) {
		return res.status(e.status).json({ error: true, message: 'Error with hi'});
	}
}