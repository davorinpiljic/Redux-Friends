import { combineReducers } from 'redux'
import { LOGGING_IN, UPDATE_END, GET_DATA_START, GET_DATA_SUCCESS, GET_DATA_FAIL, UPDATE_START, FRIEND_UPDATE } from './actions'


const initialState = {
    deletingFriend: false,
    isFetchingData: false,
    friends: [],
    isLoggingIn: false,
    savingFriends: false,
    updatingFriend: false,
    activeFriend: [],
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
        case UPDATE_START: {
            return {
                ...state,
                updatingFriend: true,
                activeFriend: action.payload,
            }
        }
        case UPDATE_END: {
            return {
                ...state,
                updatingFriend: false,
                activeFriend: [],

            }
        }
        

        default: 
            return state;
        }
}

export default combineReducers({
    friendReducer
})