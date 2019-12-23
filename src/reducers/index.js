import moment from 'moment'

const initialState = {
  selectedMonth: moment(),
}

const dateContext = (state = initialState, action) => {
	
	let newState = state

  switch (action.type) {
    
    case 'SELECT_TODAY':
    	newState.selectedMonth = moment()
      return newState

    case 'SELECT_NEXT_MONTH':
    	newState.selectedMonth = state.selectedMonth.add(1,"month")
      return newState

    case 'SELECT_PREV_MONTH':
    	newState.selectedMonth = state.selectedMonth.subtract(1,"month")
      return newState

    default: return state
  }
}

export default dateContext