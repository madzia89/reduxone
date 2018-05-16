import React, {Component} from 'react'
import UserList from './Components/UserList'
import AsyncReduxCounter from './Components/AsyncReduxCounter'

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <UserList/>
                </div>
                <div>
                    <AsyncReduxCounter/>
                </div>
            </div>


        )
    }
}

export default App
