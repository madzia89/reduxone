import {createStore, combineReducers} from 'redux'
import counterReducer, {inc, dec} from './state/counter'

const reducer = combineReducers({
    counter: counterReducer, //counter w tym miejscu mówi reducerowi że to jest stan  w counterReducer
})

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

//metoda do dispatchowania
//dispatch jest tym co przyjmuje akcję i przekazuje je do reducerów
window.inc = (value) => store.dispatch(inc(value)) //musimy tutaj wywołać inc, bo inc jest action creator który zwraca akcję a my właśnie chcemy akcję a nie jego kreatora
window.dec = (value) => store.dispatch(dec(value))
