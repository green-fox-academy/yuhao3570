const initState = {
    firstName: '',
    lastName: '',
    email: ''
}

function formReducer(state=initState, action) {
    if(action.type === 'SUBMIT'){
        return {
            ...state,
            ...action.value
        }
    }
    return state;   
}

export default formReducer;