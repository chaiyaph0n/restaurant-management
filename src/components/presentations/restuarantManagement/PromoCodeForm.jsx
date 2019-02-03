import React from 'react'
import PropTypes from 'prop-types'

const PromoCodeForm = props => {
  const viewForm = props.formType === 'view'
  const FormSubmitBtn =
    props.formType === 'view' ? null : (
      <button
        className="btn btn-primary"
        onClick={props.handlerOnClickSubmitBtn}
      >
        Submit
      </button>
    )

  return (
    <div className="card text-dark">
      <div className="card-body">
        <div className="row mb-2">
          <label htmlFor="promoCoceInput" className="col-4 col-form-label">
            Code :
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              id="promoCoceInput"
              name={props.promoCodeInputName}
              value={props.promoCodeInputValue}
              placeholder="Promo Code"
              onChange={props.handlerOnChange}
              disabled={viewForm}
            />
          </div>
        </div>

        <div className="row mb-2">
          <label htmlFor="desctibeInput" className="col-4 col-form-label">
            Description :
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              id="desctibeInput"
              name={props.promoCodeDescInputName}
              value={props.promoCodeDescInputValue}
              placeholder="Promo Code Description"
              onChange={props.handlerOnChange}
              disabled={viewForm}
            />
          </div>
        </div>

        <div className="row form-grop align-items-center mb-2">
          <label htmlFor="promoTypeSelector" className="col-4 col-form-label">
            Discount Type :
          </label>
          <div className="col-8">
            <div className="row align-items-center mb-1">
              <div className="col-4 form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  id="billDiscountRadio"
                  name={props.promoCodeDiscountTypeInputName}
                  value={1}
                  checked={props.promoCodeDiscountTypeInputValue === 1}
                  onChange={props.handlerOnChange}
                  disabled={viewForm}
                />
                <label className="form-check-label" htmlFor="billDiscountRadii">
                  Bill
                </label>
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  id="billDiscountCondition"
                  name={props.promoCodeDiscountConditionInputName}
                  value={
                    props.promoCodeDiscountTypeInputValue === 1
                      ? props.promoCodeDiscountConditionInputValue
                      : ''
                  }
                  placeholder="Condition"
                  disabled={
                    viewForm || props.promoCodeDiscountTypeInputValue !== 1
                  }
                  onChange={props.handlerOnChange}
                />
              </div>
            </div>
          </div>
          <div className="col-8 offset-4">
            <div className="row align-items-center">
              <div className="col-4 form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  id="personDiscountRadio"
                  name={props.promoCodeDiscountTypeInputName}
                  value={2}
                  checked={props.promoCodeDiscountTypeInputValue === 2}
                  onChange={props.handlerOnChange}
                  disabled={viewForm}
                />
                <label
                  className="form-check-label"
                  htmlFor="personDiscountRadii"
                >
                  Person
                </label>
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  id="personDiscountCondition"
                  name={props.promoCodeDiscountConditionInputName}
                  value={
                    props.promoCodeDiscountTypeInputValue === 2
                      ? props.promoCodeDiscountConditionInputValue
                      : ''
                  }
                  placeholder="Condition"
                  disabled={
                    viewForm || props.promoCodeDiscountTypeInputValue !== 2
                  }
                  onChange={props.handlerOnChange}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-2">
          <label htmlFor="discountAmountInput" className="col-4 col-form-label">
            Discount :
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              id="discountAmountInput"
              name={props.promoCodeDiscountAmountInputName}
              value={props.promoCodeDiscountAmountInputValue}
              placeholder="Promo Code Discount"
              onChange={props.handlerOnChange}
              disabled={viewForm}
            />
          </div>
        </div>

        <div className="row mb-2">
          <label htmlFor="promoUsedCountInput" className="col-4 col-form-label">
            Using Counter :
          </label>
          <div className="col-sm-8">
            <input
              type="number"
              min={0}
              className="form-control"
              id="promoUsedCountInput"
              name={props.promoCodeUseCountInputName}
              value={props.promoCodeUseCountInputValue}
              placeholder="Count promocode used"
              onChange={props.handlerOnChange}
              disabled={viewForm}
            />
          </div>
        </div>

        <div className="row mb-2">
          <label htmlFor="limitUsePromotInput" className="col-4 col-form-label">
            Limit Using :
          </label>
          <div className="col-sm-8">
            <input
              type="number"
              min={0}
              className="form-control"
              id="limitUsePromotInput"
              name={props.promoCodeLimtUseInputName}
              value={props.promoCodeLimtUseInputValue}
              placeholder="Limit use promo code"
              onChange={props.handlerOnChange}
              disabled={viewForm}
            />
          </div>
        </div>

        <div className="row mb-2">
          <div className="col">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="activePromoCodeCheck"
                name={props.promoCodeActiveInputName}
                value={true}
                checked={props.promoCodeActiveInputValue}
                onChange={props.handlerOnChange}
                disabled={viewForm}
              />
              <label
                className="form-check-label"
                htmlFor="activePromoCodeCheck"
              >
                Active
              </label>
            </div>
          </div>

          <div className="col">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="promotionCheck"
                name={props.promoCodePromotionInputName}
                value={true}
                checked={props.promoCodePromotionInputValue}
                onChange={props.handlerOnChange}
                disabled={viewForm}
              />
              <label className="form-check-label" htmlFor="promotionCheck">
                Promotion
              </label>
            </div>
          </div>
        </div>

        <div className="row flex-centering-base mt-3">
          <button
            className="btn btn-danger mr-2"
            onClick={props.handlerOnClickClearBtn}
          >
            Clear
          </button>
          {FormSubmitBtn}
        </div>
      </div>
    </div>
  )
}

PromoCodeForm.propTypes = {
  codeInputName: PropTypes.string,
  codeInputValue: PropTypes.string,
  descriptionInputName: PropTypes.string,
  descriptionInputValue: PropTypes.string,
  handlerOnChange: PropTypes.func
}

export default PromoCodeForm
