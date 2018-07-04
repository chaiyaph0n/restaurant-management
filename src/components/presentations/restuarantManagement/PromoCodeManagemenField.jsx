import React from 'react'
import PropTypes from 'prop-types'
import {
  PromoCodeForm,
  PromoCodeDisplayGroup
} from '../../presentations/restuarantManagement'

const PromoCodeManagemenField = props => {
  return (
    <div className="row">
      <div className="col-12 col-lg-6">
        <PromoCodeDisplayGroup
          promoCodeList={props.promoCodeList}
          handlerOnClickBtn={props.handlerOnClickAddEditView}
        />
      </div>
      <div className="col-12 col-lg-6">
        <PromoCodeForm
          formType={props.formType}
          promoCodeInputName={props.promoCodeInputName}
          promoCodeInputValue={props.promoCodeInputValue}
          promoCodeDescInputName={props.promoCodeDescInputName}
          promoCodeDescInputValue={props.promoCodeDescInputValue}
          promoCodeDiscountTypeInputName={props.promoCodeDiscountTypeInputName}
          promoCodeDiscountTypeInputValue={
            props.promoCodeDiscountTypeInputValue
          }
          promoCodeDiscountConditionInputName={
            props.promoCodeDiscountConditionInputName
          }
          promoCodeDiscountConditionInputValue={
            props.promoCodeDiscountConditionInputValue
          }
          promoCodeDiscountAmountInputName={
            props.promoCodeDiscountAmountInputName
          }
          promoCodeDiscountAmountInputValue={
            props.promoCodeDiscountAmountInputValue
          }
          promoCodeUseCountInputName={props.promoCodeUseCountInputName}
          promoCodeUseCountInputValue={props.promoCodeUseCountInputValue}
          promoCodeLimtUseInputName={props.promoCodeLimtUseInputName}
          promoCodeLimtUseInputValue={props.promoCodeLimtUseInputValue}
          promoCodeActiveInputName={props.promoCodeActiveInputName}
          promoCodeActiveInputValue={props.promoCodeActiveInputValue}
          promoCodePromotionInputName={props.promoCodePromotionInputName}
          promoCodePromotionInputValue={props.promoCodePromotionInputValue}
          handlerOnChange={props.handlerOnChange}
          handlerOnClickSubmitBtn={props.handlerOnClickSubmitBtn}
          handlerOnClickClearBtn={props.handlerOnClickClearBtn}
        />  
      </div>
    </div>
  )
}

export default PromoCodeManagemenField
