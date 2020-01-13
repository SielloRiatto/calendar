import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

if (!global._babelPolyfill) {
	require('babel-polyfill');
}

ReactDOM.render(
	<App />, 
	document.getElementById('root')
)