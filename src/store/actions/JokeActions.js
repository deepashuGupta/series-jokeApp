import {ADD_JOKES, REMOVE_JOKES} from '../actionTypes';

export const storeJoke = (joke) => (dispatch, prevState)=>{
    console.log(prevState())
    return dispatch({
        type : ADD_JOKES,
        payload : joke
    })
}

export const removeJoke = (id) => {
    return {
        type : REMOVE_JOKES,
        payload : id
    }
}