import moment from 'moment';

const initialState = {
  today: moment()
}

const reduser = (state = initialState, action) => {
  switch (action.type) {

    case 'UPDATE_SOLUTION':
      return action.solution

    default: return state
  }
}

export default reduser