import {ADD_SERIES, REMOVE_SERIES} from '../actionTypes';

const initalState = {
    series : []
}

export const SeriesReducer = (state = initalState , action) =>{
    const duplicateSeries = [...state.series]
    switch(action.type){
        case ADD_SERIES :duplicateSeries.push(action.payload)
        return {...state , series : duplicateSeries}
        case REMOVE_SERIES : return {...state , series : duplicateSeries.filter(s => s.id !== action.payload)}
        default : return state
    }
}