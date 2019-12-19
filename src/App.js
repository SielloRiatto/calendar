import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import rootReducer from './reducers'
import CalendarHeader from "./components/CalendarHeader";
import CalendarBody from "./components/CalendarBody";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const App = () => {
  return (
  	<Provider store={store}>
	  	<div className="container">
	  		<CalendarHeader />
	  		<CalendarBody />
	  	</div>
	</Provider>
  );
}

export default App;