import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Root from './Root'
import reducers from './reducers'
import './webStyle.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

const store = createStore(reducers)

ReactDOM.render(<Root store={store} />, document.getElementById('app'))

module.hot.accept()
