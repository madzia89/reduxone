import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import counter, {/*inc, dec*/} from './state/counter'
import todos, {/*add, del*/} from './state/todos'
import exerciseState from './state/exerciseState'
// import counter2, {inc as incCounter2, dec as decCounter2} from './state/counter2'
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

//dzięki poniższemu thunk będzie współgrał z devtoolsami
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    reducer,
    composeEnhancers(//compose składa dodatki do reakta
        applyMiddleware(thunk)
    )
)

store.dispatch(initCounterSync())




//
// //metoda do dispatchowania
// //dispatch jest tym co przyjmuje akcję i przekazuje je do reducerów
// window.inc = (value) => store.dispatch(inc(value)) //musimy tutaj wywołać inc, bo inc jest action creator który zwraca akcję a my właśnie chcemy akcję a nie jego kreatora
// window.dec = (value) => store.dispatch(dec(value))
//
// window.addTask = (taskText) => store.dispatch(add(taskText))
// window.delTask = (index) => store.dispatch(del(index))
//
//
// // store.dispatch(incCounter2())
// // store.dispatch(decCounter2())


