// Mere sab Reducer ko yaha call krna hoga 

import { ChangeTheNumber } from "./upDown";
import { MultTheNumber } from "./mulDiv";
// Multiple Reducer h to uske ek saath rakhne ke liye we use Redux
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    // Yaha jitne be reducer create kiye honge sab aayga vo
    ChangeTheNumber, 
    MultTheNumber
    // ChangeTheBackground
});

export default rootReducer;