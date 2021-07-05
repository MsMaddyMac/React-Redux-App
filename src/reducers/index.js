//import actions
import { 
    FETCH_ELEPHANT_LOADING, 
    FETCH_ELEPHANT_SUCCESS, 
    FETCH_ELEPHANT_FAILED  
} from '../actions';

const initialState = {
    elephants: [],
    error: null,
    isFetching: false
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_ELEPHANT_LOADING:
            return {
                ...state,
                isFetching: true,
                error: null
            };
            case FETCH_ELEPHANT_SUCCESS:
            return {
                ...state,
                elephants: action.payload,
                isFetching: false,
                error: null
            };
            case FETCH_ELEPHANT_FAILED:
            return {
                ...state,
                elephants: [],
                isFetching: false,
                error: action.payload
            };
            default:
                return state;
    }
}

export default reducer;