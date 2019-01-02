export const UPDATE_CURRENT_USER = 'UPDATE_CURRENT_USER';
export const UPDATE_POSTS = 'UPDATE_POSTS';
export const SET_CURRENT_POST = 'SET_CURRENT_POST'

export function updateUser(user) {
  return {
    type: UPDATE_CURRENT_USER,
    payload: user
  };
}

export function updatePostList(post) {
    return {
      type: UPDATE_POSTS,
      payload: post
    }
  }

  export function setCurrentPost(post) {
    return {
      type: SET_CURRENT_POST,
      payload: post
    }
  }
