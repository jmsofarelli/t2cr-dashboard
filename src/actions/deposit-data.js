import axios from 'axios'
import { BACKEND_BASE_HOST } from '../config/backend'
import { FETCH_DEPOSIT_DATA } from './types'

export const fetchDepositData = network => async dispatch => {
  const response = await axios.get(
    `${BACKEND_BASE_HOST}/deposit-data?network=${network}`
  )
  dispatch({ type: FETCH_DEPOSIT_DATA, payload: response.data.depositData })
}
