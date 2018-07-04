import React from 'react'

const BahtInputGroup = ({ id, children }) => {
  return (
    <div id={id} className="input-group">
      <div className="input-group-append">
        <span className="input-group-text">{children}</span>
        <span className="input-group-text">฿</span>
      </div>
    </div>
  )
}

export default BahtInputGroup
