import mongoose, { Schema }  from 'mongoose';

const TwitterSchema = new Schema({
	tweet: {
		type: String,
		required: true
	},
	user: {
		type: String,
		require: true
	}
});

export default mongoose.model('TweetSchema', TwitterSchema);