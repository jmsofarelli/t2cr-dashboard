import { combineReducers } from 'redux'
import depositDataReducer from './deposit-data'
import ethPriceReducer from './eth-price'
import tokensCountByStatusReducer from './tokens-count-by-status'
import badgesCountByStatusReducer from './badges-count-by-status'
import crowdfundingTokensReducer from './crowdfunding-tokens'
import crowdfundingPageReducer from './crowdfunding-page'

export default combineReducers({
  depositData: depositDataReducer,
  priceEth: ethPriceReducer,
  tokensCountByStatus: tokensCountByStatusReducer,
  badgesCountByStatus: badgesCountByStatusReducer,
  crowdfundingTokens: crowdfundingTokensReducer,
  crowdfundingPage: crowdfundingPageReducer
})
