import React from 'react';
import './assets/styles/style.sass'

/*import CalendarHeaderWrapper from "./components/CalendarHeaderWrapper"
import CalendarBodyWrapper from "./components/CalendarBodyWrapper"*/

import CalendarWrapper from "./components/CalendarWrapper"

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const App = () => {
  return (
  	<Provider store={store}>
	  	<CalendarWrapper />
	</Provider>
  );
}

export default App