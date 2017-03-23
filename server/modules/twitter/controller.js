import Twitter from './model';

export const hi = async (req, res) => {
	try {
		return res.status(200).json('helllo');
	} catch (e) {
		return res.status(e.status).json({ error: true, message: 'Error with hi'});
	}
}