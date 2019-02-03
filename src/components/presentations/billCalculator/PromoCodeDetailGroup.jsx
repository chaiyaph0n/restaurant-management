import React from 'react'
import { PromoCodeDetail } from './'

const PromoCodeDetailGroup = ({ promoCodeDetailList }) => {
  if (promoCodeDetailList.length > 0) {
    const promoCodeDetailRender = promoCodeDetailList.map((promoCodeDetail, index) => (
      <PromoCodeDetail
        key={'PromoCodeDetail' + index}
        promoCode={promoCodeDetail.code}
        describe={promoCodeDetail.describe}
        promoDiscount={promoCodeDetail.discountAmount}
      />
    ))

    return <ul>{promoCodeDetailRender}</ul>
  }
  return false
}

export default PromoCodeDetailGroup
