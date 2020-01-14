import {
  CROWDFUNDING_PAGE_NEXT,
  CROWDFUNDING_PAGE_PREVIOUS
} from '../actions/types'

export default (state = 1, action) => {
  switch (action.type) {
    case CROWDFUNDING_PAGE_NEXT:
      return state + 1
    case CROWDFUNDING_PAGE_PREVIOUS:
      return state - 1
    default:
      return state
  }
}
