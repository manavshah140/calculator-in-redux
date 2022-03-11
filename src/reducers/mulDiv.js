const initialState = 5;

export const MultTheNumber = (state = initialState, action) => {
    switch(action.type) {
        case "MULTIPLICATION" : return state * action.payload;
        case "DIVISION" : return state / 5; 
        default:  return state
    }
}