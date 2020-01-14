import axios from 'axios'
import { BACKEND_BASE_HOST } from '../config/backend'
import { FETCH_TOKENS_COUNT_BY_STATUS } from './types'

export const fetchTokensCountByStatus = network => async dispatch => {
  const response = await axios.get(
    `${BACKEND_BASE_HOST}/tokens-by-status?network=${network}`
  )
  dispatch({
    type: FETCH_TOKENS_COUNT_BY_STATUS,
    payload: response.data.countByStatus
  })
}
