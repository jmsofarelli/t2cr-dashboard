import axios from 'axios'
import { BACKEND_BASE_HOST } from '../config/backend'
import { FETCH_BADGES_COUNT_BY_STATUS } from './types'

export const fetchBadgesCountByStatus = network => async dispatch => {
  const response = await axios.get(
    `${BACKEND_BASE_HOST}/addresses-by-status?network=${network}`
  )
  dispatch({
    type: FETCH_BADGES_COUNT_BY_STATUS,
    payload: response.data.countByStatus
  })
}
