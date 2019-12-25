import moment from 'moment'

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

export const fetchUsersAction = (className, selectedDate = moment()) => {
    return async (dispatch) => {
        dispatch(fetchUsersPending())

        await fetch('/src/api/generated.json')
        .then(response => response.json())
        .then(json => {
            if(json.error) {
                throw(json.error)
            }
            debugger
            json.users = json.users.filter(user => (
              moment(user.firstDate, "DD-MM-YYYY").isSameOrBefore(selectedDate, 'month') &&
              moment(user.lastDate, "DD-MM-YYYY").isSameOrAfter(selectedDate, 'month')
            ))

            dispatch(fetchUsersSuccess(json.users))
            
            switch (className) {
              case 'prev':
                dispatch(selectPrevMonth())
                break
              case 'today':
                dispatch(selectToday())
                break
              case 'next':
                dispatch(selectNextMonth())
                break
            }

            return json.users
        }).catch(error => {
            dispatch(fetchUsersError(error))
        })
    }
}