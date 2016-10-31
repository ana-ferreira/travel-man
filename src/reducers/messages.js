const stateDefault = {
  messages: []
}


const messages = (state = stateDefault, action) => {
  switch (action.type) {
    case 'LIST_MESSAGES_FULFILLED':
      return {
        ...state,
        messages: action.payload
      }
    case 'MARK_MESSAGES_READ_FULFILLED':
      return {
        ...state
      }
    default:
      return state;
  }
}






export default messages;
