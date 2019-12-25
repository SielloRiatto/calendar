export const selectToday = () => ({
  type: 'SELECT_TODAY'
})

export const selectNextMonth = () => ({
  type: 'SELECT_NEXT_MONTH'
})

export const selectPrevMonth = () => ({
  type: 'SELECT_PREV_MONTH'
})



export const fetchUsersPending = () => ({
  type: 'FETCH_USERS_PENDING',
})

export const fetchUsersSuccess = (users) => ({
  type: 'FETCH_USERS_SUCCESS',
  users: users
})

export const fetchUsersError = (error) => ({
  type: 'FETCH_USERS_ERROR',
  error: error
})