export const UPDATE_CURRENT_USER = 'UPDATE_CURRENT_USER';
export const UPDATE_POSTS = 'UPDATE_POSTS';
export const SET_CURRENT_POST = 'SET_CURRENT_POST'
export const UPDATE_POSTS_FILTER = 'UPDATE_POSTS_FILTER'

export function updateUser(user) {
  return {
    type: UPDATE_CURRENT_USER,
    payload: user
  };
}

export function updatePostList(postsArray) {
    return {
      type: UPDATE_POSTS,
      payload: postsArray
    }
  }

  export function updatePostListFilter(postsArray) {
      return {
        type: UPDATE_POSTS_FILTER,
        payload: postsArray
      }
    }

  export function setCurrentPost(post) {
    return {
      type: SET_CURRENT_POST,
      payload: post
    }
  }
