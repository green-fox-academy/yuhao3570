const initState = {
    counter: 0,
    tags: ['blue', 'bold', 'hipster']
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
        let tagsCopy = [...state.tags];
        for(let tag of action.tags.split(',')){
            if(!tagsCopy.includes(tag)){
                tagsCopy.push(tag);
            }
        }

        return {
            ...state,
            tags: tagsCopy
        }
    }

    if(action.type === 'REMOVE_TAG'){
        let tagsCopy = [...state.tags];
        if(tagsCopy.includes(action.tag)){
            return {
                ...state,
                tags: tagsCopy.filter(tag => tag !== action.tag)
            }
        }
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