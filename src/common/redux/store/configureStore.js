import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import * as reducers from '../reducers';

const enhancer = compose(
  applyMiddleware(thunkMiddleware)
);

const reducer = combineReducers({
  ...reducers
});

export default function configureStore(initialState) {
  return createStore(reducer, initialState, enhancer);
}
