import {createStore, combineReducers} from 'redux'
import counterReducer, {inc, dec} from './state/counter'

const reducer = combineReducers({
    counter: counterReducer,
})

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

//metoda do dispatchowania
//dispatch jest tym co przyjmuje akcję i przekazuje je do reducerów
store.dispatch(inc()) //musimy tutaj wywołać inc, bo inc jest action creator który zwraca akcję a my właśnie chcemy akcję a nie jego kreatora
store.dispatch(inc())
store.dispatch(inc())
store.dispatch(dec())
