import React from 'react'
import PropTypes from 'prop-types'

const TableRadioSelector = ({ radioName, radioValue, handlerOnChange }) => {
  return (
    <div className="row form">
      <div className="col-auto">Select Table :</div>
      <div className="col-auto form-check">
        <div className="row">
          <div className="col-auto">Zone A</div>
          <div className="col form-check">
            <input
              className="form-check-input"
              type="radio"
              name={radioName}
              id="tableRadioName1"
              value="Counter"
              onChange={handlerOnChange}
              checked={radioValue === 'Counter'}
            />
            <label className="form-check-label" htmlFor="tableRadioName1">
              Counter
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col-auto">Zone B</div>
          <div className="col form-check">
            <input
              className="form-check-input"
              type="radio"
              name={radioName}
              id="tableRadioName2"
              value="P2"
              onChange={handlerOnChange}
              checked={radioValue === 'P2'}
            />
            <label className="form-check-label" htmlFor="tableRadioName2">
              Table 2 seats
            </label>
          </div>
          <div className="col form-check">
            <input
              className="form-check-input"
              type="radio"
              name={radioName}
              id="tableRadioName3"
              value="P4"
              onChange={handlerOnChange}
              checked={radioValue === 'P4'}
            />
            <label className="form-check-label" htmlFor="tableRadioName3">
              Table 4 seats
            </label>
          </div>
          <div className="col form-check">
            <input
              className="form-check-input"
              type="radio"
              name={radioName}
              id="tableRadioName4"
              value="P8"
              onChange={handlerOnChange}
              checked={radioValue === 'P8'}
            />
            <label className="form-check-label" htmlFor="tableRadioName4">
              Table 8 seats
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

TableRadioSelector.propTypes = {
  radioName: PropTypes.string,
  radioValue: PropTypes.string,
  handlerOnChange: PropTypes.func
}

export default TableRadioSelector
