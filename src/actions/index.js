export const incNumber = (num) => {
    return{
        type: "INCREMENT",
        payload: num
    }
}

export const decNumber = () => {
    return{
        type: "DECREMENT",
    }
}

export const mulNumber = (num) => {
    return{
        type: "MULTIPLICATION",
        payload: num
    }
}

export const divideNumber = () => {
    return{
        type: "DIVISION",
    }
}