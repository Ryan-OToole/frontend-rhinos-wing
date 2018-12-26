class Adapter {
  static isLoggedIn() {
    return !!localStorage.getItem('token')
  }
}

export default Adapter
