import { UPDATE_CURRENT_USER, UPDATE_BULLETINS, SET_CURRENT_BULLETIN, UPDATE_BULLETINS_FILTER, UPDATE_CURRENT_USER_BULLETINS, UPDATE_CURRENT_USER_BULLETINS_FILTER } from '../actions/index';

const defaultState = {
  currentUser: null,
  listOfBulletins: [],
  listOfBulletinsFilter: [],
  currentBulletin: null,
  currentUserBulletins: [],
  currentUserBulletinsFilter: []
}

const reducers = (state = defaultState, action) => {

  switch(action.type) {
    case UPDATE_CURRENT_USER:
      return {...state, currentUser: action.payload}
    case UPDATE_BULLETINS:
      return {...state, listOfBulletins: action.payload}
    case SET_CURRENT_BULLETIN:
      return {...state, currentBulletin: action.payload}
    case UPDATE_BULLETINS_FILTER:
      return {...state, listOfBulletinsFilter: action.payload}
    case UPDATE_CURRENT_USER_BULLETINS:
      return {...state, currentUserBulletins: action.payload.data}
    case UPDATE_CURRENT_USER_BULLETINS_FILTER:
      return {...state, currentUserBulletinsFilter: action.payload}
    default:
      return state
  }
}

export default reducers;
