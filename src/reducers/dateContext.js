import moment from 'moment'

const initialState = {
  selectedDate: moment(),
}

const dateContext = (state = initialState, action) => {
	
	let newState = state

  switch (action.type) {
    
    case 'SELECT_TODAY':
    	newState.selectedDate = moment()
      return newState

    case 'SELECT_NEXT_MONTH':
    	newState.selectedDate = state.selectedDate.add(1,"month")
      return newState

    case 'SELECT_PREV_MONTH':
    	newState.selectedDate = state.selectedDate.subtract(1,"month")
      return newState

    default: return state
  }
}

export default dateContext