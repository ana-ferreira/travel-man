const stateDefault = {
  notifications: []
}


const notifications = (state = stateDefault, action) => {
  switch (action.type) {
    case 'LIST_NOTIFICATIONS_FULFILLED':
      return {
        ...state,
        notifications: action.payload
      }
    case 'MARK_NOTIFICATIONS_READ_FULFILLED':
      return {
        ...state
      }
    default:
      return state;
  }
}






export default notifications;
