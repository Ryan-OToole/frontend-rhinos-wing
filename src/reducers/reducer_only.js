import { UPDATE_CURRENT_USER, UPDATE_POSTS, SET_CURRENT_POST, UPDATE_POSTS_FILTER } from '../actions/index';

const defaultState = {
  currentUser: null,
  listOfPosts: [],
  listOfPostsFilter: [],
  currentPost: null
}

const reducer = (state = defaultState, action) => {

  switch(action.type) {
    case UPDATE_CURRENT_USER:
      return {...state, currentUser: action.payload}
    case UPDATE_POSTS:
      return {...state, listOfPosts: action.payload}
    case SET_CURRENT_POST:
      return {...state, currentPost: action.payload}
    case UPDATE_POSTS_FILTER:
      return {...state, listOfPostsFilter: action.payload}
    default:
      return state
  }
}

export default reducer;
