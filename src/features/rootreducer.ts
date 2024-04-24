
import { combineReducers } from "redux";
import { reducer as counterReducer } from "./counter";
import { profileReducer } from "./profile";


const rootReducer = combineReducers({
    conter: counterReducer,
    profile: profileReducer
})

export {rootReducer };