import { FETCH_TOKENS_COUNT_BY_STATUS } from '../actions/types'

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_TOKENS_COUNT_BY_STATUS:
      return action.payload
    default:
      return state
  }
}
