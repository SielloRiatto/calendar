import {fetchUsersPending, fetchUsersSuccess, fetchUsersError} from '../actions';

function fetchUsersAction() {
    return dispatch => {
        dispatch(fetchUsersPending());
        fetch('https://exampleapi.com/users')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error)
            }
            dispatch(fetchUsersSuccess(res.users))
            return res.users
        })
        .catch(error => {
            dispatch(fetchUsersError(error))
        })
    }
}

export default fetchUsersAction