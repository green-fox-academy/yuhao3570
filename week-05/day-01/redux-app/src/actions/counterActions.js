function increaseAction(amount = 1) {
    return {
        type: 'INCREASE',
        amount
    }
}

function decreaseAction(amount = 1) {
    return {
        type: 'DECREASE',
        amount
    }
}

function setAction(amount) {
    return {
        type: 'SET',
        amount
    }
}

function resetAction() {
    return {
        type: 'RESET'
    }
}

export {increaseAction, decreaseAction, setAction, resetAction};