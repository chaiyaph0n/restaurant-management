export default function SearchPromoCode (promoCodeList, promoCodeInput) {
  let promoCodeDetail
  
  promoCodeList.map(promoCode => {
    if (promoCode.code === promoCodeInput) {
      promoCodeDetail = promoCode
    }
  })
  
  return promoCodeDetail
}
