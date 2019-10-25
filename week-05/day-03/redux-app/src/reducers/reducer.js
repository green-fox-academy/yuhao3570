const initState = {
    counter: 0,
};

const reducer = (state = initState, action) => {
    
    if(action.type === 'INCREASE'){
        return {
            ...state,
            counter: state.counter + action.amount
        }
    }

    return state;
}

export default reducer;