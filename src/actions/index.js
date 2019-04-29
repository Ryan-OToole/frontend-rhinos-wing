export const UPDATE_CURRENT_USER = 'UPDATE_CURRENT_USER';
export const UPDATE_BULLETINS = 'UPDATE_BULLETINS';
export const SET_CURRENT_BULLETIN = 'SET_CURRENT_BULLETIN';
export const UPDATE_BULLETINS_FILTER = 'UPDATE_BULLETINS_FILTER';
export const UPDATE_CURRENT_USER_BULLETINS = 'UPDATE_CURRENT_USER_BULLETINS';
export const UPDATE_CURRENT_USER_BULLETINS_FILTER = 'UPDATE_CURRENT_USER_BULLETINS_FILTER';

export function updateUser(user) {
  return {
    type: UPDATE_CURRENT_USER,
    payload: user
  };
}

export function updateBulletinList(postsArray) {
    return {
      type: UPDATE_BULLETINS,
      payload: postsArray
    }
  }

  export function updateBulletinListFilter(postsArray) {
      return {
        type: UPDATE_BULLETINS_FILTER,
        payload: postsArray
      }
    }

  export function setCurrentBulletin(post) {
    return {
      type: SET_CURRENT_BULLETIN,
      payload: post
    }
  }

  export function updateCurrentUserBulletins(postsArray) {
  return {
    type: UPDATE_CURRENT_USER_BULLETINS,
    payload: postsArray
  }
}

export function updateCurrentUserBulletinsFilter(postsArray) {
  return {
    type: UPDATE_CURRENT_USER_BULLETINS_FILTER,
    payload: postsArray
  }
}
