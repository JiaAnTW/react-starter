import { combineReducers } from 'redux';
import defaultReducer from './reducer';

export default combineReducers({
    default: defaultReducer,
});
