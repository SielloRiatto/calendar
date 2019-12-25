import React from 'react';
import './assets/styles/style.css'

import CalendarWrapper from "./components/CalendarWrapper"

import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

const middlewares = [thunk]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	rootReducer,
	composeEnhancers(
		applyMiddleware(...middlewares)
  	)
)

const App = () => {
  return (
  	<Provider store={store}>
	  	<CalendarWrapper />
	</Provider>
  );
}

export default App