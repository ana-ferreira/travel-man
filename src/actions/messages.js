import axios from 'axios';
import { createAction } from 'redux-actions';

const apiEndpoint = 'https://api.mlab.com/api/1';
const dbName = 'travel-man'
const collectionName = 'messages';
const apiKey = process.env.API_KEY;

export const list = createAction('LIST_MESSAGES', () => {
  return axios
    .get(`${apiEndpoint}/databases/${dbName}/collections/${collectionName}?apiKey=${apiKey}`)
    .then(resp => resp.data);
});


export const markMessagesRead = createAction('MARK_MESSAGES_READ', () => {
  return {}
});
