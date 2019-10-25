const initState = {
  users: [],
  loading: false
}

export function reducer(state=initState, action) {
  if(action.type === 'FETCH_CONTENT_START'){
    return {
      ...state,
      loading: true
    }
  }

  if(action.type === 'FETCH_CONTENT_SUCCESS'){
    return {
      ...state,
      users: action.value,
      loading: false
    }
  }

  return state;
}