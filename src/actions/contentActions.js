const API_URL = process.env.REACT_APP_API_URL
const headers = {
  "Content-Type": "application/json",
  "Accept": "application/javascript"
}

export function postComment(track_id, content, auth) {
  return (dispatch) => {
    fetch(API_URL + '/api/v1/comments', {
      method: "POST",
      headers: {
        ...headers,
        "Authorization": `Token token=${ auth.token }`
      },
      body: JSON.stringify({
        user_id: auth.user_id,
        track_id: track_id,
        content: content
      })
    })
    .then(r => r.json())
    .then(json => {
      dispatch({
        type: "ADD_COMMENT",
        payload: json
      })
    })
  }
}

export function storeFFTData(func) {
  return (dispatch) => {
    dispatch({type: "SET_DATA", payload: func})
  }
}

export function uploadTrack(auth, formData) {
  return (dispatch) => {
    fetch(API_URL + 'api/v1/audio_files', {
      method: "POST",
      headers: {
        "Authorization": `Token token=${ auth.token }`
      },
      body: formData
    }).then(r => r.json()).then(json => {
      console.log(json)
      this.props.addSong(json)
      this.props.history.push('/')
    })
  }
}

export function fetchTrack(id, auth) {
  return (dispatch) => {
    let headers
    if (auth) {
      headers =  {
        'Content-Type': 'application/json',
        "Accept": "application/javascript",
        "Authorization": `Token token=${ auth.token }`
      }
    } else {
      headers =  {
        'Content-Type': 'application/json',
        "Accept": "application/javascript"
      }
    }
    return fetch(API_URL + `api/v1/tracks/${ id }`, {
      method: "GET",
      headers: {
        ...headers
      }
    })
    .then(r => r.json())
    .then(json => {
      dispatch({type: "SET_SHOW", payload: json})
    })
  }
}

export function playFetch(id) {
  return (dispatch) => {
    fetch(API_URL + `api/v1/tracks/${id}/play`)
  }
}
