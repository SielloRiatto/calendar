import {fetchUsersPending, fetchUsersSuccess, fetchUsersError} from '../actions'

function fetchUsersAction() {
    return dispatch => {
        dispatch(fetchUsersPending())
        fetch('/src/api/generated.json')
        .then(response => response.json())
        .then(json => {
            debugger
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

export default fetchUsersAction