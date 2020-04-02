export const fetchUser = dispatch => () => {
  fetch('https://randomuser.me/api/', {
      headers: {
        accept: 'application/json'
      },
    })
    .then(response => response.json())
    .then(data => {
      dispatch(innerDispatch => innerDispatch({
        type: 'SET_USER',
        payload: data.results[0]
      }))
    })
}