import moment from 'moment'

const initialState = {
  date: moment()
}

const dateContext = (state = initialState, action) => {
  switch (action.type) {

    case 'ADD_VACATION':
      return state

    default: return state
  }
}

export default dateContext