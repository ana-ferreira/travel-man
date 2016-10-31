import axios from 'axios';
import { createAction } from 'redux-actions';

const apiEndpoint = 'https://api.mlab.com/api/1';
const dbName = 'travel-man'
const collectionName = 'notifications';
const apiKey = process.env.API_KEY;

export const list = () => {
  console.log(`${apiEndpoint}/databases/${dbName}/collections/${collectionName}?apiKey=${apiKey}&q={read : {$ne : true}}`);
  return {
    type: 'LIST_NOTIFICATIONS',
    payload: axios
      .get(`${apiEndpoint}/databases/${dbName}/collections/${collectionName}?apiKey=${apiKey}&q={read : {$ne : true}}`)
      .then(resp => resp.data)
  }
};


export const markAllRead = () => (dispatch) => {
  return dispatch({
    type: 'MARK_NOTIFICATIONS_READ',
    payload: axios.put(`${apiEndpoint}/databases/${dbName}/collections/${collectionName}?apiKey=${apiKey}&q={read : {$ne : true}}&m=true`, { $set: { read: true } })
      .then(e => {
        dispatch(list());
      })
  });
};
