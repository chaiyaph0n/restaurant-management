import React from 'react'

const InputPromoCode = props => {
  return (
    <div className="row">
      <div className="col-auto mb-3">
        <div className="row no-gutters align-items-center">
          <label htmlFor="promoCodeInputId" className="mr-2 mb-0 col-auto">
            Promo Code
          </label>
          <div className="col-auto">
            <input
              type="text"
              className="form-control"
              name={props.promoCodeInputName}
              value={props.promoCodeInputValue}
              onChange={props.handlerOnChange}
            />
          </div>
          <div className="col-auto ml-2">
            <button
              className="btn btn-primary"
              disabled={!props.promoCodeInputValue}
              onClick={props.handlerOnClickCheckCode}
            >
              Check Code
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InputPromoCode
