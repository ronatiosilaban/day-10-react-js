import _ from 'lodash'
import { API } from '../config/api'

//lodash function
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts())
    _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();
  }

  //function action untuk mengambil data dari API posts dan menyimpannya ke redux store
  export const fetchPosts = () => {

    return async (dispatch, getState) => {
      const response = await API.get('/posts');
  
      dispatch({ type: 'FETCH_POSTS', payload: response.data });

    }
  };
  
   //function action untuk mengambil data dari API users dan menyimpannya ke redux store
  export const fetchUser = (id) => {
    return async (dispatch, getState) => {
      const response = await API.get(`/users/${id}`);
  
      dispatch({ type: 'FETCH_USER', payload: response.data });

    }
  };