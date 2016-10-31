import axios from 'axios';

const stateDefault = {
  places: [],
  loading: false
}


const places = (state = stateDefault, action) => {
  if (action.type.includes('START')) {
    return {
      ...state,
      loading: true
    }
  }
  switch (action.type) {
    case 'PLACE_CREATE_SUCCESS':
      return {
        ...state,
        places: [...state.places, action.place],
        loading: false
      }
    case 'PLACE_LIST_SUCCESS':
      return {
        ...state,
        places: action.places,
        loading: false
      }
    default:
      return state;
  }
}






export default places;
