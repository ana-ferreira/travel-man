import axios from 'axios';


const apiEndpoint = 'https://api.mlab.com/api/1';
const dbName = 'travel-man'
const collectionName = 'places';
const apiKey = process.env.API_KEY;

const create = place => dispatch => {
  //Start creating
  dispatch({ type: 'PLACE_CREATE_START' });
  axios.post(`${apiEndpoint}/databases/${dbName}/collections/${collectionName}?apiKey=${apiKey}`, place)
    .then(e => dispatch({ type: 'PLACE_CREATE_SUCCESS', place: place }))
    .catch(e => dispatch({ type: 'PLACE_CREATE_ERROR', msg: e }));
}

const list = () => dispatch => {
  dispatch({ type: 'PLACE_LIST_START' });
  axios.get(`${apiEndpoint}/databases/${dbName}/collections/${collectionName}?apiKey=${apiKey}`)
    .then(json => dispatch({ type: 'PLACE_LIST_SUCCESS', places: json.data }))
    .catch(e => dispatch({ type: 'PLACE_LIST_ERROR', msg: e }));
}

export default { create, list };
