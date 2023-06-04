import {ADD_JOKES, REMOVE_JOKES} from '../actionTypes';

const initalState = {
    jokes : []
}

export const JokeReducer = (state = initalState, action) =>{
    const duplicateJokes = [...state.jokes]
    switch (action.type){
        case ADD_JOKES : 
        duplicateJokes.push(action.payload)
        return {...state, jokes : duplicateJokes}
        case REMOVE_JOKES : return {...state , jokes : duplicateJokes.filter(j => j.id !== action.payload)}
        default : return state
    }
}