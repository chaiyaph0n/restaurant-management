import PromoCode from './PromoCode'
import BuffePrice from './BuffePrice'
import Reservation from './Reservation'
import { combineReducers } from 'redux'

const RootReducer = combineReducers({
  PromoCode,
  BuffePrice,
  Reservation
})

export default RootReducer
