

const URL = 'http://localhost:3000/posts/'

class Adapter {
  static isLoggedIn() {
    return !!localStorage.getItem('token')
  };

  static postPost(user_id, title, body, rhino) {
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

  static getPosts(id) {
    return fetch(`${URL}${id}`)
      .then( r => r.json() )
  }

  static getPostsAll() {
    return fetch(URL)
            .then( r => r.json() )
  }
}

export default Adapter;
