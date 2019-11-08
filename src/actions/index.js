import axios from 'axios';

export const FETCH_ELEPHANT_LOADING  = "FETCH_ELEPHANT_LOADING";
export const FETCH_ELEPHANT_SUCCESS  = "FETCH_ELEPHANT_SUCCESS";
export const FETCH_ELEPHANT_FAILED  = "FETCH_ELEPHANT_FAILED";

export const elephantsLoading = () => ({ type: FETCH_ELEPHANT_LOADING });
export const elephantsLoadingSuccess = data => ({ type: FETCH_ELEPHANT_SUCCESS, payload: data });
export const elephantsLoadingFailure = error => ({ type: FETCH_ELEPHANT_FAILED, payload: error  });

export function fetchElephants() {
    return function(dispatch) {
        dispatch(elephantsLoading());
        return axios
        .get(`https://elephant-api.herokuapp.com/elephants`)
        .then(res => {console.log('Dumbo', res.data)
            const info= res.data
            dispatch(elephantsLoadingSuccess(info))})
            // .then(json =>
            //     dispatch(elephantsLoadingSuccess(res))
            // )
            .catch(err => dispatch(elephantsLoadingFailure(), err)
            );
    };
}