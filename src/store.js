import {createStore, combineReducers} from 'redux'
import counter, {inc, dec} from './state/counter'
import todos, {add, del} from './state/todos'
// import counter2, {inc as incCounter2, dec as decCounter2} from './state/counter2'

const reducer = combineReducers({
    counter, //counter w tym miejscu mówi reducerowi że to jest stan counter
    todos,
    // counter2
})

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

//metoda do dispatchowania
//dispatch jest tym co przyjmuje akcję i przekazuje je do reducerów
window.inc = (value) => store.dispatch(inc(value)) //musimy tutaj wywołać inc, bo inc jest action creator który zwraca akcję a my właśnie chcemy akcję a nie jego kreatora
window.dec = (value) => store.dispatch(dec(value))

window.addTask = (taskText) => store.dispatch(add(taskText))
window.delTask = (index) => store.dispatch(del(index))

// store.dispatch(incCounter2())
// store.dispatch(decCounter2())
