import { combineReducers } from "redux";
import postReducers from './postsReducers'
import usersReducers from './usersReducers'


//menampung function dari postReducers dan userReducers

export default combineReducers({
    posts : postReducers,
    users : usersReducers
})