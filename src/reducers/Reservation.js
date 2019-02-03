import { ADD_RESERVATION, SET_RESERVATION_LIST } from '../constants/ActionTypes'

const initialState = {
  reservationList: localStorage.getItem('reservationList')
    ? JSON.parse(localStorage.getItem('reservationList'))
    : SetReservationListToLocalStorage(),
  restaurantMaxTable: localStorage.getItem('restaurantMaxTable')
    ? JSON.parse(localStorage.getItem('restaurantMaxTable'))
    : SetTableToLocalStorage()
}

function SetReservationListToLocalStorage (data) {
  const mockReservationList = [
    {
      customerName: 'Alex Luther',
      customerPhone: '081-123-4567',
      time: '12',
      zone: 'A',
      table: 'Counter'
    },
    {
      customerName: 'John Smith',
      customerPhone: '081-123-2412',
      time: '15',
      zone: 'B',
      table: 'P8'
    },
    {
      customerName: 'John Do',
      customerPhone: '081-421-2412',
      time: '15',
      zone: 'B',
      table: 'P2'
    },
    {
      customerName: 'Jane Do',
      customerPhone: '081-421-2444',
      time: '15',
      zone: 'B',
      table: 'P4'
    }
  ]

  const reservationList = !data ? mockReservationList : data

  try {
    localStorage.setItem('reservationList', JSON.stringify(reservationList))

    return localStorage.getItem('reservationList')
  } catch (err) {
    return undefined
  }
}

function SetTableToLocalStorage (data) {
  const mockRestaurantMaxTable = {
    Counter: 12,
    P2: 4,
    P4: 6,
    P8: 2
  }

  const restaurantMaxTable = !data ? mockRestaurantMaxTable : data

  try {
    localStorage.setItem(
      'restaurantMaxTable',
      JSON.stringify(restaurantMaxTable)
    )

    return localStorage.getItem('restaurantMaxTable')
  } catch (err) {
    return undefined
  }
}

export default function Reservation (state = initialState, action) {
  let tmpReservationList = []

  switch (action.type) {
    case ADD_RESERVATION:
      tmpReservationList = [...state.reservationList, action.payload]
      localStorage.setItem(
        'reservationList',
        JSON.stringify(tmpReservationList)
      )

      return {
        reservationList: tmpReservationList,
        restaurantMaxTable: JSON.parse(localStorage.getItem('restaurantMaxTable'))
      }
    case SET_RESERVATION_LIST:
      localStorage.setItem('reservationList', JSON.stringify(action.payload))
      return {
        reservationList: action.payload,
        restaurantMaxTable: JSON.parse(localStorage.getItem('restaurantMaxTable'))
      }
    default:
      return state
  }
}
