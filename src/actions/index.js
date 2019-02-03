import * as types from '../constants/ActionTypes'

export const setPrice = price => ({ type: types.SET_PRICE, payload: price })

export const addReservationDetail = reserveDetail => ({
  type: types.ADD_RESERVATION,
  payload: reserveDetail
})

export const setReservationList = reservationList => ({
  type: types.SET_RESERVATION_LIST,
  payload: reservationList
})

export const addPromoCode = promoCodeDetail => ({
  type: types.ADD_PROMOCODE,
  payload: promoCodeDetail
})

export const setPromoCode = promoCodeDetailList => ({
  type: types.SET_PROMOCODE,
  payload: promoCodeDetailList
})

// export const removePromocode = promoCode => ({
//   type: types.REMOVE_PROMOCODE,
//   payload: promoCode
// })
