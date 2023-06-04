import { combineReducers } from 'redux';
import {JokeReducer} from '../reducers/JokeReducer'
import {SeriesReducer} from '../reducers/SeriesReducer'

export const mainReducer = combineReducers({
    JokeReducer,
    SeriesReducer
})