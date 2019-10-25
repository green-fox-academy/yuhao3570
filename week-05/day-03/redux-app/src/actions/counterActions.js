function increaseAction(amount = 1) {
    return {
        type: 'INCREASE',
        amount
    }
}

function delayIncreaseAction(amount, delay){
    return async (dispatch) => {
        setTimeout(() => {
            dispatch(increaseAction(parseInt(amount)));
        }, parseInt(delay) * 1000);
    }
}

export {increaseAction, delayIncreaseAction};