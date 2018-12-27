import { UPDATE_CURRENT_USER, UPDATE_POSTS } from '../actions/index';

const defaultState = {
  currentUser: null,
  listOfPosts: []
}

const reducer = (state = defaultState, action) => {

  switch(action.type) {
    case UPDATE_CURRENT_USER:
      return {...state, currentUser: action.payload}
    case UPDATE_POSTS:
      return {...state, listOfPosts: action.payload}
    default:
      return state
  }
}

export default reducer;
