import { createStore } from 'redux';
import { likeReducer } from './Reducer';

export const store = createStore(likeReducer);