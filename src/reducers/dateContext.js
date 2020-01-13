import moment from 'moment'
import React from 'react'
import {fetchUsersAction} from "../utils"

const initialState = {
  selectedDate: moment(),
  usersData: {
    pending: false, 
    users: [],
    error: null
  }
}

const dateContext = (state = initialState, action) => {
  switch (action.type) {
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