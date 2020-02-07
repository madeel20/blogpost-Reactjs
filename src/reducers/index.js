import { combineReducers } from 'redux';
import fetchPostsReducer from './fetchPostsReducer';
import fetchUserReducer from './fetchUserReducer';

export default combineReducers({
    Posts: fetchPostsReducer,
    Users: fetchUserReducer
});