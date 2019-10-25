export function fetchContent() {
  return async (dispatch) => {
    dispatch({type: 'FETCH_CONTENT_START'});
    let data = await fetch('https://jsonplaceholder.typicode.com/users')
                        .then(res => res.json());
    dispatch({type: 'FETCH_CONTENT_SUCCESS', value: data})
  }
}