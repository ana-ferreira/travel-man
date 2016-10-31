const stateDefault = {
  places: [],
  loading: false
}


const places = (state = stateDefault, action) => {
  if (action.type.includes('PLACE') && action.type.includes('PENDING')) {
    return {
      ...state,
      loading: true
    }
  }
  switch (action.type) {
    case 'PLACE_CREATE_FULFILLED':
      return {
        ...state,
        places: [...state.places, action.payload],
        loading: false
      }
    case 'PLACE_LIST_FULFILLED':
      return {
        ...state,
        places: action.payload,
        loading: false
      }
    default:
      return state;
  }
}






export default places;
