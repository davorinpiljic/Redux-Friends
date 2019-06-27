import { combineReducers } from 'redux'


const initialState = {
    friends: [],
}

const friendReducer = (state = initialState, action) =>{
    switch (action.type) {
        default: 
            return state;
        }
}

export default combineReducers({
    friendReducer
})