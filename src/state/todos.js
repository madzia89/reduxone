const ADD = 'todos/ADD'
const DEL = 'todos/DELETE'
const NEW_TASK_TEXT = 'todos/NEW_TASK_TEXT'

export const add = () => ({type: ADD})
export const del = (index) => ({type: DEL, index}) //index bo będziemy usuwać po indexie
export const newTaskText = (newText) => ({type: NEW_TASK_TEXT, newText}) //index bo będziemy usuwać po indexie


const initialState = {
    tasks: [],
    newTaskText: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case NEW_TASK_TEXT:
            return {
                    ...state,
                    newTaskText: action.newText
                }
        case ADD:
            return state.newTaskText ?  //to mówi, że jeżeli action.taskText istnieje to ma zrobić concata, a jeżeli nie to ma zwrócić stan
                {
                    ...state,
                    newTaskText: '',
                    tasks: state.tasks.concat({
                        text: state.newTaskText,
                        completed: false
                    })
                }
                : state

        case DEL:
            return {
                ...state,
                tasks:
                    state.tasks.filter((task, index) => index !== action.index)
            }
        default:
            return state

    }
}