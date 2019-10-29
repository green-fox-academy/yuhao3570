const user = 'Hao';

export function fetchMSG() {
  return async (dispatch) => {
    dispatch({type: 'FETCH_MSG_START'});
    let data = await fetch('https://stream-vanadium.glitch.me/messages')
                       .then(res=> res.json());
    dispatch({
      type: 'FETCH_MSG_SUCCESS',
      messages: data.messages
    })
  }
}

export function postMSG(text) {
  return async (dispatch) => {
    dispatch({type: 'SEND_MSG_START'});

    let data = await fetch('https://stream-vanadium.glitch.me/messages', {
      method: 'post',
      body: JSON.stringify({
        user,
        text
      }),
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
    })
    .then(res=> res.json());

    dispatch({
      type: 'SEND_MSG_SUCCESS',
      sentMSG: data
    })
  }
}