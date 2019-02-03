import React from 'react'
import PropTypes from 'prop-types'

const InputPersonField = ({ inputName, inputValue, handlerInputChange }) => {
  return (
    <div className="row align-items-center">
      <div className="col-5">
        <label htmlFor="personInput">Person:</label>
      </div>
      <div className="col-7">
        <input
          id="personInput"
          name={inputName}
          className="form-control"
          type="number"
          min="0"
          value={inputValue}
          onChange={handlerInputChange}
        />
      </div>
    </div>
  )
}

InputPersonField.propTypes = {
  inputName: PropTypes.string,
  inputValue: PropTypes.string,
  handlerInputChange: PropTypes.func
}

export default InputPersonField
