import {ADD_SERIES, REMOVE_SERIES} from '../actionTypes';

export const StoreSeries = (series) =>{
    return{
        type : ADD_SERIES,
        payload : series
    }
}

export const RemoveSeries = (id) =>{
    return{
        type : REMOVE_SERIES,
        payload : id
    }
}
