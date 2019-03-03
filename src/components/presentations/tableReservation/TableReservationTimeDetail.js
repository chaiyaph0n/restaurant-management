import React from 'react'
import PropTypes from 'prop-types'

const TableReservationTimeDetail = ({
  zone,
  reservationDetailList,
  handlerOnClickBtn
}) => {
  return (
    <table className="table text-center table-bordered">
      <thead>
        <tr>
          <th scope="col-4">Time</th>
          <th scope="col-6">Available Table</th>
          <th scope="col-2" />
        </tr>
      </thead>
      <tbody>
        <TableDetailRow
          zone={zone}
          reservationDetailList={reservationDetailList}
          handlerOnClickBtn={handlerOnClickBtn}
        />
      </tbody>
    </table>
  )
}

const TableDetailRow = ({ zone, reservationDetailList, handlerOnClickBtn }) => {
  const filterReserreservationDetavationByZoneList = reservationDetailList
    .filter(reservationDetail => reservationDetail.zone === zone)
    .map(reservationDetail => reservationDetail)

  let tableDetailRowData = []
  let reservationDetailForEachTime = []
  let tableCounter = 0
  let tableP2 = 0
  let tableP4 = 0
  let tableP8 = 0

  for (let time = 12; time < 20; time++) {
    tableCounter = tableP2 = tableP4 = tableP8 = 0

    filterReserreservationDetavationByZoneList.map(
      filterReserreservationDetavationByZone => {
        if (filterReserreservationDetavationByZone.time === time.toString()) {
          reservationDetailForEachTime.push(filterReserreservationDetavationByZone)

          switch (filterReserreservationDetavationByZone.table) {
            case 'Counter':
              tableCounter++
              break
            case 'P2':
              tableP2++
              break
            case 'P4':
              tableP4++
              break
            case 'P8':
              tableP8++
              break
          }
        }
      }
    )

    const displayAvailableTable =
      zone === 'A'
        ? 'Counter - 12/' + tableCounter
        : zone === 'B'
          ? 'P2 - 4/' + tableP2 + ', P4 - 6/' + tableP4 + ', P8 - 2/' + tableP8
          : ''

    tableDetailRowData.push(
      <tr key={'tableDetailRowData' + time}>
        <th scope="row">{time + '.00'}</th>
        <td>{displayAvailableTable}</td>
        <td>
          <button
            className="btn btn-primary"
            onClick={() => {
              handlerOnClickBtn(zone, time)
            }}
          >
            Detail
          </button>
        </td>
      </tr>
    )
  }

  return tableDetailRowData
}

TableReservationTimeDetail.propTypes = {
  zone: PropTypes.oneOf(['A', 'B']),
  reservationDetailList: PropTypes.array,
  handlerOnLickViewDetailBtn: PropTypes.func
}

export default TableReservationTimeDetail
