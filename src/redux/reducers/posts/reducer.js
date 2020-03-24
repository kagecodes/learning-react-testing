import * as A from './../../actions'

export default (state = [], action) => {
  switch (action.type) {
    case A.GET_POSTS:
      return action.payload
    default:
      return state
  }
}
