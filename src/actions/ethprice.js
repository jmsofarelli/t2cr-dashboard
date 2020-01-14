import axios from 'axios'
import { BACKEND_BASE_HOST } from '../config/backend'
import { FETCH_ETH_PRICE } from './types'

export const fetchEthPrice = () => async dispatch => {
  const response = await axios.get(`${BACKEND_BASE_HOST}/eth-price`)
  dispatch({ type: FETCH_ETH_PRICE, payload: parseFloat(response.data.price) })
}
