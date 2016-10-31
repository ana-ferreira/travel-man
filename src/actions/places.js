import axios from 'axios';
import { createAction } from 'redux-actions';

const apiEndpoint = 'https://api.mlab.com/api/1';
const dbName = 'travel-man'
const collectionName = 'places';
const apiKey = process.env.API_KEY;

const create = createAction('PLACE_CREATE', (place) => {
  //Start creating
  return axios.post(`${apiEndpoint}/databases/${dbName}/collections/${collectionName}?apiKey=${apiKey}`, place)
    .then(e => e.data);
})

const list = createAction('PLACE_LIST', () => {
  return axios.get(`${apiEndpoint}/databases/${dbName}/collections/${collectionName}?apiKey=${apiKey}`)
    .then(json => json.data);
})

export default { create, list };
