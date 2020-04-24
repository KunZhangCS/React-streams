import _ from 'lodash';
import {
    FETCH_STREAM,
    FETCH_STREAMS,
    CREATE_STREAM,
    EDIT_STREAM,
    DELETE_STREAM
} from '../actions/types';


// Object-based state is easier to manipulate than array-based state
// Redux requires return a new object {...state}
export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_STREAM:        
        case CREATE_STREAM:
        case EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case FETCH_STREAMS:
            // ... takes out the objects from mapKeys and adds them to the big return object
            return { ...state, ..._.mapKeys(action.payload, 'id')};
        case DELETE_STREAM:
            // omit creates a new object without the one we passed in
            return _.omit(state, action.payload);
        default: 
            return state;
    }
};