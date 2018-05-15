import React, {Component} from 'react'
import CounterControls from './Components/CounterControls'
import Paper from 'material-ui/Paper'
import ToDoList from './Components/ToDoList'
import Text from './Components/Text'


class App extends Component {
    render() {
        return (
            <div>
            <div className="App"
                 style={{display: 'flex', justifyContent: 'center'}}
            >
                <Paper>
                    <CounterControls/>

                </Paper>

            </div>
                <div className={'deleteDiv'}>
                    <ToDoList/>
                </div>
                <div>
                    <Text/>
                </div>
            </div>


        )
    }
}

export default App
