import { combineReducers } from 'redux'
import { LOGGING_IN, GET_DATA_START, GET_DATA_SUCCESS, GET_DATA_FAIL } from './actions'


const initialState = {
    deletingFriend: false,
    isFetchingData: false,
    friends: [],
    isLoggingIn: false,
    savingFriends: false,
    updatingFriend: false,
    error: null
}

const friendReducer = (state = initialState, action) =>{
    switch (action.type) {
        case LOGGING_IN: {
            return {
                ...state,
                isLoggingIn: true,
            }
        }
        case GET_DATA_START: {
            return {
                ...state,
                isFetchingData: true,
            }
        }
        case GET_DATA_SUCCESS: {
            return {
                ...state,
                isFetchingData: false,
                isLoggingIn: false,
                friends: action.payload,
            }
        }
        case GET_DATA_FAIL: {
            return {
                ...state,
                isLoggingIn: false,
                error: action.payload,
            }
        }
        default: 
            return state;
        }
}

export default combineReducers({
    friendReducer
})