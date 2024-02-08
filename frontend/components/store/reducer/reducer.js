const { combineReducers } = require("@reduxjs/toolkit")

function reducer (state, action) {
    switch(action.type) {
        case "add_to_cart":
            return {
                
            }
        default:
            return state
}
}

reducer = combineReducers