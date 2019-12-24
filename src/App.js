import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import CalendarHeaderWrapper from "./components/CalendarHeaderWrapper"
import CalendarBodyWrapper from "./components/CalendarBodyWrapper"

import rootReducer from './reducers'

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const App = () => {
  return (
  	<Provider store={store}>
	  	<div className="container">
	  		<CalendarHeaderWrapper />
	  		<CalendarBodyWrapper />
	  	</div>
	</Provider>
  );
}

export default App