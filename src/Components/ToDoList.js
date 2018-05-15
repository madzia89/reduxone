import React, {Component} from 'react'
import {connect} from 'react-redux'
import TextField from 'material-ui/TextField'
import {add, del} from "../state/todos"
import RaisedButton from 'material-ui/RaisedButton'

const ToDo = (props) => (
    <div>
        <ul>
            {props.tasks.map((task, i) => (
                <li key={i}>
                    {task.text}
                    {<RaisedButton
                        name={'deleteTask'}
                        onClick={() => props.remove(i)}
                        label={'delete'}
                        primary={true}
                    />}
                </li>
            ))}

        </ul>
        <TextField
            name={'addTasks'}
        />

    </div>
)

const mapStateToProps = state => ({
    tasks: state.todos
})

const mapDispatchToProps = dispatch => ({
    remove: (index) => dispatch(del(index))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDo)