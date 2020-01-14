import axios from 'axios'
import { BACKEND_BASE_HOST } from '../config/backend'
import {
  FETCH_CROWDFUNDING_TOKENS,
  CROWDFUNDING_PAGE_NEXT,
  CROWDFUNDING_PAGE_PREVIOUS
} from './types'

export const fetchCrowdfundingTokens = network => async dispatch => {
  const response = await axios.get(
    `${BACKEND_BASE_HOST}/crowdfunding-tokens?network=${network}`
  )
  dispatch({
    type: FETCH_CROWDFUNDING_TOKENS,
    payload: response.data.crowdfundingTokens
  })
}

export const nextCrowdfundingPage = () => ({ type: CROWDFUNDING_PAGE_NEXT })

export const previousCrowdfundingPage = () => ({
  type: CROWDFUNDING_PAGE_PREVIOUS
})
