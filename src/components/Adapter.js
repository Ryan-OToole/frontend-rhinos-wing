import axios from 'axios';

const URL = 'http://localhost:3000/posts/';
const URL_SESSIONS = 'http://localhost:3000/sessions';
const URL_USERS = 'http://localhost:3000/users';

class Adapter {

  static isLoggedIn() {
    return !!localStorage.getItem('token')
  };

  static login(username, password) {
    const config = {
      method: 'POST',
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password
       })
    }
  return fetch(URL_SESSIONS, config)
          .then( r=>r.json() )
  }

  static register(username, password) {
    const config = {
      method: 'POST',
      headers: {
        "Content-Type" : 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password
       })
    }
    return fetch(URL_USERS, config)
            .then( r=>r.json() )
  }

  static postBulletin(user_id, title, body, rhino) {
    const config = {
      method: "POST",
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
          user_id: user_id,
          title: title,
          body: body,
          rhino: rhino
      })
    }
    return fetch(URL, config)
            .then( r => r.json() )
  }

  static getBulletins(id) {
    return axios.get(`${URL_USERS}/${id}/posts`)
  }

  static getBulletinsAll() {
    return fetch(URL)
            .then( r => r.json() )
  }

  static destroyBulletin(id) {
    return fetch(`${URL}/${id}`, {method:'DELETE'})
            .then( r => r.json() )
  }
}


export default Adapter;
