import { SET_PRICE } from '../constants/ActionTypes'

const initialState = {
  pricePerPerson: localStorage.getItem('pricePerPerson')
    ? localStorage.getItem('pricePerPerson')
    : SetPriceToLocalStorage()
}

function SetPriceToLocalStorage (price) {
  try {
    if (price) localStorage.setItem('pricePerPerson', price)
    else localStorage.setItem('pricePerPerson', 459)

    return localStorage.getItem('pricePerPerson')
  } catch (err) {
    return undefined
  }
}

export default function BuffePrice (state = initialState, action) {
  switch (action.type) {
    case SET_PRICE:
      SetPriceToLocalStorage(action.payload)
      return {
        pricePerPerson: action.payload
      }
    default:
      return state
  }
}
