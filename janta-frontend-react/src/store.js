import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { thunk } from 'redux-thunk'; // Correct named import
import rootReducer from './reducers';

const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;
