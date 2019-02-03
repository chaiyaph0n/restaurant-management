import React from 'react'
import PropTypes from 'prop-types'
import { GetDigitFloat } from '../../logic'

const PriceManagementField = props => {
  return (
    <React.Fragment>
      <div className="row mb-3">
        <div className="col-4 col-sm-auto">{'Current Price : '}</div>
        <div className="col">
          {GetDigitFloat(props.currentPrice, 2) + ' Baht'}
        </div>
      </div>
      <div className="row form-group">
        <div className="col-12 col-sm-10">
          <div className="row">
            <label
              htmlFor="newPriceInput"
              className="col-4  col-sm-auto col-form-label"
            >
              New Price :
            </label>
            <div className="col-3 col-sm-2 col-xl-1">
              <input
                id="newPriceInput"
                className="form-control text-right"
                name={props.newPriceInputName}
                value={props.newPriceInputValue}
                onChange={props.handlerOnChange}
              />
            </div>
            <label htmlFor="newPriceInput" className="col-auto col-form-label">
              Baht
            </label>
          </div>
        </div>
        <div className="col-12 col-sm-2 flex-centering-base">
          <button
            className="btn btn-primary"
            disabled={!props.newPriceInputValue}
            onClick={props.handlerOnClick}
          >
            Set price
          </button>
        </div>
      </div>
    </React.Fragment>
  )
}

PriceManagementField.propTypes = {
  currentPrice: PropTypes.string,
  newPriceInputName: PropTypes.string,
  newPriceInputValue: PropTypes.string,
  handlerOnChange: PropTypes.func,
  handlerOnClick: PropTypes.func
}

export default PriceManagementField
