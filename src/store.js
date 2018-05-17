import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import counter from './state/counter'
import todos from './state/todos'
import exerciseState from './state/exerciseState'
import randomUsers, {setUsersList, fetchUsers} from './state/randomUsers'
import thunk from 'redux-thunk'
import asyncReduxCounter, {initCounterSync} from './state/asyncReduxCounter'

export const reducer = combineReducers({
    randomUsers,
    counter,
    todos,
    exerciseState,
    asyncReduxCounter,
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

store.dispatch(initCounterSync())



