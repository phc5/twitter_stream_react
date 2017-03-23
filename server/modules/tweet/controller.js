//import TweetSchema from './model';
import { client, params } from './twitterAuth';

export const hi = async (req, res) => {
	try {
		client.get('statuses/user_timeline', params, (err, tweets, res) => {
			if (err) console.log(err);
			console.log(tweets.length);
		})
		return res.status(200).json('helllo');
	} catch (e) {
		return res.status(e.status).json({ error: true, message: 'Error with hi'});
	}
}