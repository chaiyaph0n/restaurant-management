import React from 'react'
import { connect } from 'react-redux'
import { setPrice, addPromoCode, setPromoCode } from '../actions'
import {
  PriceManagementField,
  PromoCodeManagemenField
} from '../components/presentations/restuarantManagement'

class RestuarantManagement extends React.PureComponent {
  state = {
    newPrice: '',
    promoCode: '',
    promoCodeDesc: '',
    promoCodeDiscountType: 0,
    promoCodeDiscountCondition: 0,
    promoCodeDiscountAmount: 0,
    promoCodeUseCount: 0,
    promoCodeLimtUse: 0,
    promoCodeActive: false,
    promoCodePromotion: false,
    promoCodeEditDeatilBak: {},
    formType: 'add'
  }

  handlerOnChange = evt => {
    const { name, value } = evt.target

    if (
      (this.state.promoCodeActive === true && name === 'promoCodeActive') ||
      (this.state.promoCodePromotion === true && name === 'promoCodePromotion')
    ) {
      this.setState({
        [name]: false
      })
    } else if (name === 'promoCodeDiscountType') {
      this.setState({
        [name]: parseInt(value)
      })
    } else {
      this.setState({
        [name]: value
      })
    }
  }

  handlerOnClickSetPriceBtn = () => {
    this.props.setPrice(this.state.newPrice)
    this.setState({
      newPrice: ''
    })
  }

  handlerOnCLickPromoCodeManagementBtn = (action, promoCodeDetail) => {
    if (action === 'remove') {
      const newPromoCodeList = this.props.promoCodeList.filter(
        promoCode => promoCode.code !== promoCodeDetail.code
      )

      this.props.setPromoCode(newPromoCodeList)

      this.clearPromoCodeForm()
    } else if (action === 'edit' || action === 'view') {
      this.setState({
        formType: action,
        promoCode: promoCodeDetail.code,
        promoCodeDesc: promoCodeDetail.describe,
        promoCodeDiscountType: promoCodeDetail.promoType,
        promoCodeDiscountCondition:
          promoCodeDetail.promoType === 1
            ? promoCodeDetail.billCondition
            : promoCodeDetail.personCondition,
        promoCodeDiscountAmount: promoCodeDetail.calNum,
        promoCodeUseCount: promoCodeDetail.usedCount,
        promoCodeLimtUse: promoCodeDetail.limit,
        promoCodeActive: promoCodeDetail.active,
        promoCodePromotion: promoCodeDetail.mainPromotion,
        promoCodeEditDeatilBak: promoCodeDetail
      })
    }
  }

  handlerOnClickSubmitPromoCodeForm = () => {
    const { formType } = this.state
    const promoCodeNotExist = this.veriflyExistingPromoCodeName(
      this.state.promoCode
    )

    let promoCodeDetail = {
      code: this.state.promoCode,
      describe: this.state.promoCodeDesc,
      active: this.state.promoCodeActive,
      personCondition:
        this.state.promoCodeDiscountType === 2
          ? this.state.promoCodeDiscountCondition
          : '',
      billCondition:
        this.state.promoCodeDiscountType === 1
          ? this.state.promoCodeDiscountCondition
          : '',
      promoType: this.state.promoCodeDiscountType,
      calNum: this.state.promoCodeDiscountAmount,
      usedCount: this.state.promoCodeUseCount,
      limit: this.state.promoCodeLimtUse,
      mainPromotion: this.state.promoCodePromotion
    }

    if (formType === 'add') {
      if (this.state.promoCode && promoCodeNotExist) {
        this.props.addPromoCode(promoCodeDetail)
      } else if (!this.state.promoCode) alert('Please insert the Promo Code value')
      else alert('This code is existing')

      this.clearPromoCodeForm()
    } else if (formType === 'edit') {
      if (
        JSON.stringify(this.state.promoCodeEditDeatilBak) ===
        JSON.stringify(promoCodeDetail)
      ) {
        alert('Value not Change')
      } else {
        let newPromoCodeList = this.props.promoCodeList.filter(
          promoCode => promoCode.code !== this.state.promoCodeEditDeatilBak.code
        )

        newPromoCodeList.push(promoCodeDetail)
        
        this.props.setPromoCode(newPromoCodeList)
  
        this.clearPromoCodeForm()
      }
    }
  }

  veriflyExistingPromoCodeName = code => {
    const filterPromoCode = this.props.promoCodeList.filter(
      promoCode => code === promoCode.code
    )

    return filterPromoCode.length === 0
  }

  clearPromoCodeForm = () => {
    this.setState({
      formType: 'add',
      promoCode: '',
      promoCodeDesc: '',
      promoCodeDiscountType: 0,
      promoCodeDiscountCondition: 0,
      promoCodeDiscountAmount: 0,
      promoCodeUseCount: 0,
      promoCodeLimtUse: 0,
      promoCodeActive: false,
      promoCodePromotion: false,
      promoCodeEditDeatilBak: {}
    })
  }

  render () {
    return (
      <React.Fragment>
        <div className="card text-white bg-dark mb-4">
          <div className="card-header">Price Mangement</div>
          <div className="card-body">
            <PriceManagementField
              currentPrice={this.props.pricePerPerson}
              newPriceInputName="newPrice"
              newPriceInputValue={this.state.newPrice}
              handlerOnChange={this.handlerOnChange}
              handlerOnClick={this.handlerOnClickSetPriceBtn}
            />
          </div>
        </div>

        <div className="card text-white bg-dark mb-4">
          <div className="card-header">Promo Code Mangement</div>
          <div className="card-body">
            <PromoCodeManagemenField
              formType={this.state.formType}
              promoCodeInputName="promoCode"
              promoCodeInputValue={this.state.promoCode}
              promoCodeDescInputName="promoCodeDesc"
              promoCodeDescInputValue={this.state.promoCodeDesc}
              promoCodeDiscountTypeInputName="promoCodeDiscountType"
              promoCodeDiscountTypeInputValue={this.state.promoCodeDiscountType}
              promoCodeDiscountConditionInputName="promoCodeDiscountCondition"
              promoCodeDiscountConditionInputValue={
                this.state.promoCodeDiscountCondition
              }
              promoCodeDiscountAmountInputName="promoCodeDiscountAmount"
              promoCodeDiscountAmountInputValue={
                this.state.promoCodeDiscountAmount
              }
              promoCodeUseCountInputName="promoCodeUseCount"
              promoCodeUseCountInputValue={this.state.promoCodeUseCount}
              promoCodeLimtUseInputName="promoCodeLimtUse"
              promoCodeLimtUseInputValue={this.state.promoCodeLimtUse}
              promoCodeActiveInputName="promoCodeActive"
              promoCodeActiveInputValue={this.state.promoCodeActive}
              promoCodePromotionInputName="promoCodePromotion"
              promoCodePromotionInputValue={this.state.promoCodePromotion}
              handlerOnChange={this.handlerOnChange}
              promoCodeList={this.props.promoCodeList}
              handlerOnClickAddEditView={
                this.handlerOnCLickPromoCodeManagementBtn
              }
              handlerOnClickSubmitBtn={this.handlerOnClickSubmitPromoCodeForm}
              handlerOnClickClearBtn={this.clearPromoCodeForm}
            />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

function mapStateToProps (state) {
  return {
    pricePerPerson: state.BuffePrice.pricePerPerson,
    promoCodeList: state.PromoCode.promoCodeList
  }
}

function mapDispatchToProps (dispatch) {
  return {
    setPrice: newPrice => {
      dispatch(setPrice(newPrice))
    },
    addPromoCode: promoCodeDetail => {
      dispatch(addPromoCode(promoCodeDetail))
    },
    setPromoCode: propromoCodeList => {
      dispatch(setPromoCode(propromoCodeList))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestuarantManagement)
