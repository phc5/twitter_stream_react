import actions from '../actions/actions';

const initialState = {
	message: 'asdfasdf'
}

const reducer = (state=initialState, actions) => {
	switch (actions.type) {
		case 'HELLO':
			return {...state, message: actions.message}
	}
	return state;
}

exports.reducer = reducer;