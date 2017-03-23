import redux from 'redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducer/reducer';

let store = createStore(reducers.reducer, applyMiddleware(thunk));
module.exports = store;