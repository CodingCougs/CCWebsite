import { combineReducers } from 'redux';
import UsersReducer from './reducer_users';
import ActiveUserReducer from './reducer_active_user';
import AuthReducer from './reducer_auth';

const rootReducer = combineReducers({
    auth: AuthReducer,
    users: UsersReducer,
    activeUser: ActiveUserReducer
});

export default rootReducer;