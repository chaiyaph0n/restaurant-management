import React from 'react'
import PropTypes from 'prop-types'
import { SvgIconButton } from '../../presentations'

const TableReservationDetailAtTime = ({
  reserveDetailList,
  handlerOnClick
}) => {
  const TBodyForRender = reserveDetailList.map((reserveDeatil, index) => (
    <TableRowData
      key={index}
      index={index + 1}
      reserveDeatil={reserveDeatil}
      handlerOnClick={handlerOnClick}
    />
  ))

  if (TBodyForRender.length === 0) {
    return (
      <div className="text-center">
        <h4>- No reservation -</h4>
      </div>
    )
  }

  return (
    <table className="table text-center table-bordered">
      <thead>
        <tr>
          <th scope="col-auto">No.</th>
          <th scope="col-auto">Table</th>
          <th scope="col-6">Customer Name</th>
          <th scope="col-6">Customer Phone</th>
        </tr>
      </thead>
      <tbody>{TBodyForRender}</tbody>
    </table>
  )
}

const TableRowData = ({ index, reserveDeatil, handlerOnClick }) => {
  const cusPhone = reserveDeatil.customerPhone ? reserveDeatil.customerPhone : '-'
  return (
    <tr>
      <td scope="row">{index}</td>
      <td>{reserveDeatil.table}</td>
      <td>{reserveDeatil.customerName}</td>
      <td>{cusPhone}</td>
      <td>
        <button className="btn btn-danger" onClick={() => handlerOnClick(reserveDeatil)}>
          Remove
        </button>
      </td>
    </tr>
  )
}

TableReservationDetailAtTime.propTypes = {
  reserveDetailList: PropTypes.array,
  handlerOnClick: PropTypes.func
}

export default TableReservationDetailAtTime
