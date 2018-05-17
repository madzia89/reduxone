import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {store} from './store'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Provider} from 'react-redux'
import Auth from './Auth/Auth'


ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <Auth>
                <App/>
            </Auth>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
)

