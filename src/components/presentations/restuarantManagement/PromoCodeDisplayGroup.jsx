import React from 'react'
import PropTypes from 'prop-types'

const PromoCodeDisplayGroup = ({ promoCodeList, handlerOnClickBtn }) => {
  return (
    <table className="table text-center table-bordered">
      <thead>
        <tr>
          <th scope="col-auto">No.</th>
          <th scope="col">Promo Code</th>
          <th scope="col" />
          <th scope="col" />
          <th scope="col" />
        </tr>
      </thead>
      <tbody>
        <PromoCodeRow
          promoCodeList={promoCodeList}
          handlerOnClickBtn={handlerOnClickBtn}
        />
      </tbody>
    </table>
  )
}

const PromoCodeRow = ({ promoCodeList, handlerOnClickBtn }) => {
  const RowList = promoCodeList.map((promoCode, index) => (
    <tr key={index}>
      <th scope="row">{index + 1}</th>
      <td>{promoCode.code}</td>
      <td>
        <button
          className="btn btn-primary"
          onClick={() => {
            handlerOnClickBtn('view', promoCode)
          }}
        >
          View
        </button>
      </td>
      <td>
        <button
          className="btn btn-warning"
          onClick={() => {
            handlerOnClickBtn('edit', promoCode)
          }}
        >
          Edit
        </button>
      </td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => {
            handlerOnClickBtn('remove', promoCode)
          }}
        >
          Remove
        </button>
      </td>
    </tr>
  ))

  return RowList
}

PromoCodeDisplayGroup.propTypes = {
  promoCodeList: PropTypes.array,
  handlerOnClick: PropTypes.func
}

export default PromoCodeDisplayGroup
