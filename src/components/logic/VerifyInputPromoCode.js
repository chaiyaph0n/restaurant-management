import * as ErrorMsg from '../../constants/ErrorMsg'

export default function VeriflyPromoCode (
  billPerson,
  billSubTotal,
  promoCodeDetail
) {
  if (promoCodeDetail.active) {
    if (
      promoCodeDetail.limit !== 0 &&
      promoCodeDetail.usedCount > promoCodeDetail.limit
    ) {
      return GenerateObject(false, ErrorMsg.LIMIT_USED_PROMO_CODE)
    }

    if (
      promoCodeDetail.personCondition > 0 &&
      billPerson < promoCodeDetail.personCondition
    ) {
      return GenerateObject(
        false,
        ErrorMsg.PERSON_LOWER_THAN_CONDITION + promoCodeDetail.personCondition
      )
    }
    
    if (
      promoCodeDetail.billCondition > 0 &&
      billSubTotal < promoCodeDetail.billCondition
    ) {
      return GenerateObject(
        false,
        ErrorMsg.BILL_SUB_TOTAL_LOWER_THAN_CONDITION +
          promoCodeDetail.billCondition
      )
    }

    return GenerateObject(true, '')
  } else {
    return GenerateObject(false, ErrorMsg.INACTIVE_PROMO_CODE)
  }
}

function GenerateObject (status, errorMsg) {
  return {
    status: status,
    errorMsg: errorMsg
  }
}
