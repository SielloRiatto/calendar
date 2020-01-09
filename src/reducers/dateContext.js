import moment from 'moment'
import React from 'react'
import changeCalendar from '../lib/changeCalendar'

const initialState = {
  selectedDate: moment(),
  contain: changeCalendar(),
  usersData: {
    pending: false,
    users: [],
    error: null
  }
}

const selectToday = (newState) => {
  debugger
  newState.contain = changeCalendar(newState.selectedDate, newState.usersData.users)
  return {...newState}
}

const selectNext = (newState) => {
  debugger
  newState.contain = changeCalendar(newState.selectedDate, newState.usersData.users)
  debugger
  return {...newState}
}

const selectPrev = (newState) => {
  debugger
  newState.contain = changeCalendar(newState.selectedDate, newState.usersData.users)
  return {...newState}
}

const dateContext = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_TODAY':
      return selectToday(state)

    case 'SELECT_NEXT_MONTH':
      return selectNext(state)

    case 'SELECT_PREV_MONTH':
      return selectPrev(state)
    
    case 'FETCH_USERS_PENDING': 
      return {
        ...state,
        usersData: {
          pending: true,
          users: [],
          error: null
        }
      }
      
    case 'FETCH_USERS_SUCCESS':
      return {
        ...state,
        usersData: {
          pending: false,
          users: action.users,
          error: null
        }
      }
      
    case 'FETCH_USERS_ERROR':
      return {
        ...state,
        usersData: {
          pending: false,
          users: [],
          error: action.error
        }
      }

    default: return state
  }
}

export default dateContext