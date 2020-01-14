import { FETCH_ETH_PRICE } from '../actions/types'

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_ETH_PRICE:
      return action.payload
    default:
      return state
  }
}
