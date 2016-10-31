import axios from 'axios';

const apiEndpoint = 'https://api.mlab.com/api/1';
const dbName = 'travel-man'
const collectionName = 'messages';
const apiKey = process.env.API_KEY;

export const list = () => {
  return {
    type: 'LIST_MESSAGES',
    payload: axios
      .get(`${apiEndpoint}/databases/${dbName}/collections/${collectionName}?apiKey=${apiKey}&q={read : {$ne : true}}`)
      .then(resp => resp.data)
  };
};


export const markAllRead = () => (dispatch) => {
  return dispatch({
    type: 'MARK_MESSAGES_READ',
    payload: axios.put(`${apiEndpoint}/databases/${dbName}/collections/${collectionName}?apiKey=${apiKey}&q={read : {$ne : true}}&m=true`, { $set: { read: true } })
      .then(e => {
        dispatch(list());
      })
  });
};
