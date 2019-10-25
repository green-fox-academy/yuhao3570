const initState = {
  messages: [],
  sentMSGs: [],
  loading: false,
  sending: false,
}
export function reducer(state=initState, action) {
  if(action.type === 'FETCH_MSG_START'){
    return {
      ...state,
      loading: true
    }
  }

  if(action.type === 'FETCH_MSG_SUCCESS'){
    return {
      ...state,
      messages: action.messages,
      loading: false
    }
  }

  if(action.type === 'SEND_MSG_START'){
    return {
      ...state,
      sending: true
    }
  }

  if(action.type === 'SEND_MSG_SUCCESS'){
    return {
      ...state,
      sentMSGs: [...state.sentMSGs, action.sentMSG],
      sending: false
    }
  }

  return state;
}