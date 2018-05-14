import {createStore, combineReducers} from 'redux'
import counterReducer from './state/counter'

const reducer = combneReducers({
    counter: counterReducer
})

const store = createStore (reducer)