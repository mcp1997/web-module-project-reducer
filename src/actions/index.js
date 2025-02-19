export const ADD_TO_MEMORY = "ADD_TO_MEMORY";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY"
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";

export const addToMemory = () => {
    return({ type: ADD_TO_MEMORY });
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operator) => {
  return({ type: CHANGE_OPERATION, payload: operator })
}

export const clearDisplay = (display) => {
  return({ type: CLEAR_DISPLAY, payload: display })
}