function increaseAction(amount = 1) {
    return {
        type: 'INCREASE',
        amount
    }
}

function delayAction(){
    return (
        async () => {
            
        }
    )
}

export {increaseAction, decreaseAction, setAction, resetAction};