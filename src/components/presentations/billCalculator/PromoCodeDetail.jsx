import React from 'react'

const PromoCodeDetail = ({ promoCode, describe, promoDiscount }) => {
  return (
    <li>
      <div className="row">
        <div className="col-auto">CODE</div>
        <div className="col-6">{promoCode + ' - ' + describe}</div>
        <div className="col">{promoDiscount}</div>
      </div>
    </li>
  )
}

export default PromoCodeDetail
