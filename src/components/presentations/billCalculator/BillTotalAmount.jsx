import React from 'react'

const BillTotalAmount = ({ billTotalAmount, handlerOnClickClearBtn }) => {
  const displayBillTotalAmount = billTotalAmount < 0 ? 0.0 : billTotalAmount

  return (
    <div className="row align-items-center">
      <div className="col">
        { 'Total Amount : ' + displayBillTotalAmount + ' ฿'}
      </div>
      <div className="col">
        <button
          className="btn btn-primary"
          onClick={handlerOnClickClearBtn}
        >
          Clear
        </button>
      </div>
    </div>
  )
}

export default BillTotalAmount
