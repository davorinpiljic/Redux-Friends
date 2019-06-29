import axios from 'axios'

export const LOGGING_IN = 'LOGGING_IN' 

export const GET_DATA_START = 'GET_DATA_START'
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS'
export const GET_DATA_FAIL = 'GET_DATA_FAIL'
export const UPDATE_START = 'UPDATE_START'
export const UPDATE_END = 'END_START'

export const FRIEND_SUBMIT = 'FRIEND_SUBMIT'


export const login = (creds) => dispatch => {
    dispatch({type: LOGGING_IN})
    return axios
        .post('http://localhost:5000/api/login', creds)
        .then(response => localStorage.setItem('token', response.data.payload))
        .catch(error => {
            if(error.response.status === 403) {
                localStorage.removeItem('token')
            dispatch({type: GET_DATA_FAIL})
            }
        })
}

export const dataActions = () => dispatch => {
    dispatch({type: GET_DATA_START})
    axios
        .get('http://localhost:5000/api/friends', {
            headers: { authorization: localStorage.getItem('token')}
        })
        .then(response => {
            dispatch({type: GET_DATA_SUCCESS, payload: response.data})
        })
        .catch(error => {
            dispatch({type: GET_DATA_FAIL, payload: error.msg})
        })
}

export const deleteItem = (friend) => dispatch => {
    dispatch({type: GET_DATA_START})
    axios
        .delete(`http://localhost:5000/api/friends/${friend.id}`, { 
        headers: { authorization: localStorage.getItem('token')}
            })
        .then(response => {
            dispatch({type: GET_DATA_SUCCESS, payload: response.data})
            })
        .catch(error => alert(error))
}

export const updateItem = (friend) => dispatch => {
    dispatch({type:UPDATE_START, payload: friend} )

}

export const friendSubmit = (friend) => dispatch => {
    dispatch({type: GET_DATA_START})
    dispatch({type: UPDATE_END})
        axios
        .put(`http://localhost:5000/api/friends/${friend.id}`, friend ,{ 
            headers: { authorization: localStorage.getItem('token')}
                })
        .then(response => {
            dispatch({type: GET_DATA_SUCCESS, payload: response.data})
            })
        .catch(error => alert(error))
}

export const addFriend = (friend) => dispatch => {
    dispatch({type: GET_DATA_START})
        axios
        .post('http://localhost:5000/api/friends', friend ,{ 
            headers: { authorization: localStorage.getItem('token')}
                })
        .then(response => {
            dispatch({type: GET_DATA_SUCCESS, payload: response.data})
            })
        .catch(error => alert(error))
}

// The login action creator should dispatch a "logging in" action, return the promise created by axios.post, then save the returned token to localStorage. You can connect your Login component, and show a spinner on your form or in your button while the login request is happening.
    