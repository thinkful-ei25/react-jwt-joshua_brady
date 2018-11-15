import { ACTIVITY_TIME, SHOW_ACTIVE_MODULE, HIDE_ACTIVE_MODULE } from '../action/active';
import { hideActiveModule } from '../actions/active';

const initialState = {
 showModule = false,
activeTime: null
}

export default (state = initialState, action) => {
  if(action.type === ACTIVITY_TIME) {
    return Object.assign({}, state, {
      activeTime: action.activeTime
    })
  }

  if(action.type === SHOW_ACTIVE_MODULE) {
    return Object.assign({}, state, {
      showModule: true
    })
  }

  if (action.type === HIDE_ACTIVE_MODULE) {
    return Object.assign({}, state, {
      showModule: false
    })
  }

  return state;

}