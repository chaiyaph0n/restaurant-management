import React from 'react'
import PropTypes from 'prop-types'
import { TableReservationDetailAtTime } from './'

const ModalReservationDetailEachTime = props => {
  const { zone, time, reserveDetailList } = props.reserveDetailListByTime

  return (
    <React.Fragment>
      <div className="row justify-content-around mb-3">
        <div className="col-auto">
          <h4>{'Zone ' + zone}</h4>
        </div>
        <div className="col-auto">
          <h4>{'Time : ' + time + '.00'}</h4>
        </div>
      </div>
      <TableReservationDetailAtTime
        reserveDetailList={reserveDetailList}
        handlerOnClick={props.handlerOnClickDelete}
      />
    </React.Fragment>
  )
}

ModalReservationDetailEachTime.propTypes = {
  reserveDetailListByTime: PropTypes.object,
  handlerOnClickDelete: PropTypes.func
}

export default ModalReservationDetailEachTime
