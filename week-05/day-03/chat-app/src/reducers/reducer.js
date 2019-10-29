const initState = {
  messages: [],
  updating: false,
}

export function reducer(state=initState, action) {
  if(action.type === 'FETCH_MSG_START' || action.type === 'SEND_MSG_START'){
    return {
      ...state,
      updating: true
    }
  }

  if(action.type === 'FETCH_MSG_SUCCESS'){
    return {
      ...state,
      messages: action.messages,
      updating: false
    }
  }

  if(action.type === 'SEND_MSG_SUCCESS'){
    return {
      ...state,
      messages: [action.sentMSG, ...state.messages],
      updating: false
    }
  }

  return state;
}