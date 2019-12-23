import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import rootReducer from './reducers'
import CalendarHeader from "./components/CalendarHeader";
import CalendarBodyWrapper from "./components/CalendarBodyWrapper";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const App = () => {
  return (
  	<Provider store={store}>
	  	<div className="container">
	  		<CalendarHeader />
	  		<CalendarBodyWrapper />
	  	</div>
	</Provider>
  );
}

export default App;