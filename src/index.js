import React from 'react'
import ReactDOM from 'react-dom'
require("babel-core/register")
require("babel-polyfill")

import App from './App'

ReactDOM.render(
	<App />, 
	document.getElementById('root')
)