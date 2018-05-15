import React, {Component} from 'react'
import CounterControls from './Components/CounterControls'
import Paper from 'material-ui/Paper'


class App extends Component {
    render() {
        return (
            <div className="App"
                 style={{display: 'flex', justifyContent: 'center'}}
            >
                <Paper>
                    <CounterControls/>
                </Paper>
            </div>
        )
    }
}

export default App
