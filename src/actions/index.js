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

export const fetchUsersAction = () => {
    return dispatch => {
        dispatch(fetchUsersPending())
        fetch('/src/api/generated.json')
        .then(response => response.json())
        .then(json => {
            if(json.error) {
                throw(json.error)
            }
            dispatch(fetchUsersSuccess(json.users))
            return json.users
        }).catch(error => {
            dispatch(fetchUsersError(error))
        })
    }
}