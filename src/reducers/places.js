import axios from 'axios';




const places = (state = { places: [] }, action) => {
  switch (action.type) {
    case 'PLACE_CREATE_SUCCESS':
      return {
        ...state,
        places: [...state.places, action.place]
      }
    case 'PLACE_LIST_SUCCESS':
      return {
        ...state,
        places: action.places
      }
    default:
      return state;
  }
}






export default places;
