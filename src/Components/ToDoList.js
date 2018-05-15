import React, {Component} from 'react'
import {connect} from 'react-redux'
import TextField from 'material-ui/TextField'
import {add, del, newTaskText} from "../state/todos"
import RaisedButton from 'material-ui/RaisedButton'

const ToDo = (props) => (
    <div>
        <div>
            <TextField
                name={'addTasks'}
                onChange={props.onNewTaskChange}
                value={props.newTaskText}

            />
            <RaisedButton
                name={'addText'}
                label={'ADD'}
                onClick={() => props.addValue()}
            />
        </div>
        <div>
            <ul>
                {props.tasks.map((task, i) => (
                    <li key={i}>
                        {task.text}
                        {<RaisedButton
                            name={'deleteTask'}
                            //poniżej wywpłujemy funkcję z eventem czyli (), to oznacza ze ta funkca wywoła sę tylko z eventem
                            // czyli kliknięciem, bez tegonie ma eventu więc funkcja nie zadziała,
                            // w tym zapisie kliknięcie uruchamia funkcję która wywoła funkcję z indexem
                            onClick={() => props.remove(i)}
                            label={'delete'}
                            primary={true}
                        />}
                    </li>
                ))}

            </ul>
        </div>
    </div>
)

const mapStateToProps = state => ({
    tasks: state.todos.tasks,
    newTaskText: state.todos.newTaskText
})

const mapDispatchToProps = dispatch => ({
    remove: (index) => dispatch(del(index)),
    addValue: () => dispatch(add()),
    onNewTaskChange: (event, value) => dispatch(newTaskText(value))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDo)