const initState = {
    counter: 0,
};

const tagsReducer = (state = initState, action) => {
    
    if(action.type === 'INCREASE'){
        return {
            ...state,
            counter: state.counter + action.amount
        }
    }

    return state;
}

export default tagsReducer;