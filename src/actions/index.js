 import jsonPlaceHolder from '../apis/jsonPlaceHolder';
 import _ from 'lodash';
 export const fetchPostAndUsers = ()=> async (dispatch,getState) =>{ 
    await dispatch(fetchPosts());
    const userIds = _.uniq(_.map(getState().Posts,'userId'));
    console.log(userIds);
        userIds.forEach(userId => dispatch(fetchUser(userId)));
 }
export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceHolder.get('/posts');
    dispatch({ type: 'FETCH_POSTS', payload: response.data})
}

export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceHolder.get(`/users/${id}`);
    dispatch({ type: 'FETCH_USER', payload: response.data});
}

// const _fetchUser = _.memoize(async (id,dispatch) =>{
//     const response = await jsonPlaceHolder.get(`/users/${id}`);
//     dispatch({ type: 'FETCH_USER', payload: response.data});
// })