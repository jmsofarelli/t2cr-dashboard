import { FETCH_DEPOSIT_DATA } from '../actions/types'

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_DEPOSIT_DATA:
      return action.payload
    default:
      return state
  }
}
