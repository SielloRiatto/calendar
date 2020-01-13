import React from 'react';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers'
import CalendarWrapper from "./components/CalendarWrapper"
import './assets/styles/style.css'

const middlewares = [thunk]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	rootReducer,
	composeEnhancers(
		applyMiddleware(...middlewares)
  	)
)

const App = () => (
  	<Provider store={store}>
	  	<CalendarWrapper />
	</Provider>
)

export default App