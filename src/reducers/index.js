import { combineReducers } from 'redux';
import places from 'reducers/places';
import messages from 'reducers/messages';
import notifications from 'reducers/notifications';

export default combineReducers({ places, messages, notifications });
