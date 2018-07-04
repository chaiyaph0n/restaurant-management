import React from 'react'
import { GetDigitFloat } from '../../logic'
import { BahtInputGroup } from './'

const BillCalSubTotal = props => {
  const subTotal =
    props.discountBillSubTotal === 0 ? (
      <span>{props.subTotal + ' ฿'}</span>
    ) : (
      <React.Fragment>
        <span style={{ color: '#bcbcc1', textDecoration: 'line-through' }}>
          {props.subTotal}
        </span>
        <span className="ml-3">{props.discountBillSubTotal + ' ฿'}</span>
      </React.Fragment>
    )

  return (
    <div className="row">
      <WrapperElement>
        <label htmlFor="priceFieldGroupId" className="mr-2 mb-0 col-auto">
          Price
        </label>
        <BahtInputGroup id="priceInputGroupId">
          {GetDigitFloat(props.buffePrice, 2)}
        </BahtInputGroup>
      </WrapperElement>

      <WrapperElement>
        <label htmlFor="personFieldInputId" className="mr-2 mb-0 col-auto">
          Person
        </label>
        <input
          id="personFieldInputId"
          name={props.personInputName}
          type="number"
          min="0"
          className="form-control"
          value={props.personInputValue}
          onChange={props.handlerOnChange}
        />
      </WrapperElement>

      <WrapperElement>
        <label htmlFor="subTotalFieldGroupId" className="mr-2 mb-0 col-auto">
          Sub Total
        </label>
        {subTotal}>
      </WrapperElement>
    </div>
  )
}

const WrapperElement = ({ children }) => {
  return (
    <div className="col-auto mb-3">
      <div className="row no-gutters align-items-center">
        {children[0]}
        <div className="col-auto col-sm-auto">{children[1]}</div>
      </div>
    </div>
  )
}

export default BillCalSubTotal
