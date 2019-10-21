const initState = {
    counter: 0,
    tags: []
};

const tagsReducer = (state = initState, action) => {
    
    //counter actions
    if(action.type === 'SET'){
        return {
            ...state,
            counter: action.amount
        }
    }

    if(action.type === 'INCREASE'){
        return {
            ...state,
            counter: state.counter + action.amount
        }
    }

    if(action.type === 'DECREASE'){
        if(state.counter > 0){
            return {
                ...state,
                counter: state.counter >= action.amount ? (state.counter - action.amount): 0
            }
        }else{
            alert('Can not decrease anymore!')
        }
    }

    if(action.type === 'RESET'){
        return {
            ...state,
            counter: 0
        }
    }

    // tag actions
    if(action.type === 'ADD_TAG'){
        if(!state.tags.includes(action.tag)){
            state.tags.push(action.tag);
            return {
                ...state,
                tags: state.tags
            }
        }
        return state;
    }

    if(action.type === 'REMOVE_TAG'){
        if(state.tags.includes(action.tag)){
            return {
                ...state,
                tags: state.tags.filter(tag => tag !== action.tag)
            }
        }
        return state;
    }

    if(action.type === 'REMOVE_TAGS'){
        return {
            ...state,
            tags: []
        }
    }

    return state;
}

export default tagsReducer;