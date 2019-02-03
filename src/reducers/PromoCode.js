import { ADD_PROMOCODE, SET_PROMOCODE } from '../constants/ActionTypes'

/**
 * promoType
 * 1 is for 'total amout discount'
 * 2 is for 'free n person'
 */
const initialState = {
  promoCodeList: localStorage.getItem('promoCodeList')
    ? JSON.parse(localStorage.getItem('promoCodeList'))
    : SetPromoCodeListToLocalStorage()
}

function SetPromoCodeListToLocalStorage (data) {
  const mockPromoCodeList = [
    {
      code: 'LUCKY ONE',
      describe: 'Get Discount 15%',
      active: true,
      promoType: 1,
      personCondition: 0,
      billCondition: 1000,
      calNum: 0.15,
      usedCount: 0,
      limit: 0,
      mainPromotion: false
    },
    {
      code: '4PAY3',
      describe: 'Come 4 Pay 3',
      active: true,
      promoType: 2,
      personCondition: 4,
      billCondition: 0,
      calNum: 1,
      usedCount: 0,
      limit: 0,
      mainPromotion: false
    },
    {
      code: 'LUCKY TWO',
      describe: 'Get Discount 20% for 2 customer',
      active: true,
      promoType: 1,
      personCondition: 0,
      billCondition: 0,
      calNum: 0.2,
      usedCount: 0,
      limit: 2,
      mainPromotion: false
    },
    {
      code: 'SPECIAL PRICE',
      describe: 'Get Discount 25% when bill over 6000 Baht',
      active: true,
      personCondition: 0,
      billCondition: 6000,
      promoType: 1,
      calNum: 0.25,
      usedCount: 0,
      limit: 0,
      mainPromotion: true
    }
  ]

  const promoCodeList = !data ? mockPromoCodeList : data

  try {
    localStorage.setItem('promoCodeList', JSON.stringify(promoCodeList))

    return localStorage.getItem('promoCodeList')
  } catch (err) {
    return undefined
  }
}

export default function promoCode (state = initialState, action) {
  switch (action.type) {
    case ADD_PROMOCODE:
      const tmpPromoCodeList = [...state.promoCodeList, action.payload]

      localStorage.setItem('promoCodeList', JSON.stringify(tmpPromoCodeList))

      return {
        promoCodeList: tmpPromoCodeList
      }
    case SET_PROMOCODE:
      localStorage.setItem('promoCodeList', JSON.stringify(action.payload))

      return {
        promoCodeList: action.payload
      }
    default:
      return state
  }
}
