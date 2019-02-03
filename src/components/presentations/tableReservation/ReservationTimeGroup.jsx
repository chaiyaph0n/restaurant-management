import React from 'react'
import { TableReservationTimeDetail } from './'

const ReservationTimeGroup = ({
  reservationDetailList,
  handlerOnClickViewBtn
}) => {
  return (
    <div className="row justify-content-around">
      <div className="col-12 col-lg-6">
        <div className="card text-white bg-dark mb-3">
          <div className="card-header">Zone A</div>
          <div className="card-body">
            <TableReservationTimeDetail
              zone="A"
              reservationDetailList={reservationDetailList}
              handlerOnClickBtn={handlerOnClickViewBtn}
            />
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-6">
        <div className="card text-white bg-dark mb-3">
          <div className="card-header">Zone B</div>
          <div className="card-body">
            <TableReservationTimeDetail
              zone="B"
              reservationDetailList={reservationDetailList}
              handlerOnClickBtn={handlerOnClickViewBtn}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReservationTimeGroup
