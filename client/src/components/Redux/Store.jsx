import { createStore } from 'redux';
import { likeReducer } from './reducer';

export const store = createStore(likeReducer);