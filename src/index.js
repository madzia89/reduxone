import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {store} from './store'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'




ReactDOM.render(<MuiThemeProvider><App /></MuiThemeProvider>, document.getElementById('root'))

