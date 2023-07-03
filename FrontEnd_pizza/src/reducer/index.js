import { combineReducers } from 'redux'
import userListReducer from './userListReducer';



const reducers = combineReducers({
    userList : userListReducer
})

export default reducers