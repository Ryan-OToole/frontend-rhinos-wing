

const URL = 'http://localhost:3000/posts/'

class Adapter {
  static isLoggedIn() {
    return !!localStorage.getItem('token')
  };
  static postPost(id, title, body) {
    const config = {
      method: "POST",
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
          user_id: id,
          title: title,
          body: body,
      })
    }
    return fetch(URL, config)
            .then( r => r.json() )
  }
}

export default Adapter;
