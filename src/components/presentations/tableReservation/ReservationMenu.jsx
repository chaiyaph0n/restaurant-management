import React from 'react'
import { TableRadioSelector } from './'

import PropTypes from 'prop-types'

const ReservationMenu = props => {
  return (
    <React.Fragment>
      <div className="row form">
        <div className="col-12 col-md-6 col-xl-4 mb-3">
          <div className="row">
            <label
              className="col-auto col-form-label"
              htmlFor="customerNameInput"
            >
              Customer Name :
            </label>
            <div className="col">
              <input
                type="text"
                id="customerNameInput"
                name={props.customerNameInputName}
                className="form-control"
                value={props.customerNameInputValue}
                onChange={props.handlerOnChange}
              />
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-xl-4 mb-3">
          <div className="row">
            <label
              className="col-auto col-form-label"
              htmlFor="customerPhoneInput"
            >
              Customer Phone :
            </label>
            <div className="col">
              <input
                type="text"
                id="col"
                name={props.customerPhoneNumInputName}
                className="form-control"
                value={props.customerPhoneNumInputValue}
                onChange={props.handlerOnChange}
              />
            </div>
          </div>
        </div>

        <div className="col-8 col-sm-6 col-xl-4">
          <div className="row">
            <label className="col-auto col-form-label" htmlFor="timeInput">
              Time :
            </label>
            <div className="col-8 col-md-6 col-lg-5">
              <div className="input-group mb-3">
                <input
                  type="number"
                  id="timeInput"
                  name={props.reserveTimeInputName}
                  className="form-control"
                  min={12}
                  max={19}
                  value={props.reserveTimeInputvalue}
                  onChange={props.handlerOnChange}
                />
                <div className="input-group-append">
                  <span className="input-group-text">.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TableRadioSelector
        radioName={props.tableRadioName}
        radioValue={props.tableRadioValue}
        handlerOnChange={props.handlerOnChange}
      />
    </React.Fragment>
  )
}

ReservationMenu.propTypes = {
  tableRadioName: PropTypes.string,
  tableRadioValue: PropTypes.string,
  handlerOnChange: PropTypes.func
}

export default ReservationMenu
