import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => {
  return function(dispatch) {
    axios
      .get('/api/current_user')
      .then(res => dispatch({ type: FETCH_USER, payload: res }));
  }
};

export function selectUser(user) {
  return {
    type: 'USER_SELECTED',
    payload: user
  }
}