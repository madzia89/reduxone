import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import counter, {/*inc, dec*/} from './state/counter'
import todos, {/*add, del*/} from './state/todos'
import exerciseState from './state/exerciseState'
// import counter2, {inc as incCounter2, dec as decCounter2} from './state/counter2'
import randomUsers, {setUsersList, fetchUsers} from './state/randomUsers'
import thunk from 'redux-thunk'
import asyncReduxCounter, {initCounterSync} from './state/asyncReduxCounter'
import auth, {initAuthUSerSync} from './state/auth'

export const reducer = combineReducers({
    auth,
    randomUsers,
    counter,
    todos,
    exerciseState,
    asyncReduxCounter,
})

//dzięki poniższemu thunk będzie współgrał z devtoolsami
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    reducer,
    composeEnhancers(//compose składa dodatki do reakta
        applyMiddleware(thunk)
    )
)

store.dispatch(initCounterSync())

store.dispatch(initAuthUSerSync())


