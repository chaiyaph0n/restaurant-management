import React from 'react'
import { connect } from 'react-redux'
import { setPrice } from '../actions'
import { bindActionCreators } from 'redux'
import {
  SearchPromoCode,
  VeriflyPromoCode,
  GetDigitFloat
} from '../components/logic'
import {
  InputPromoCode,
  BillCalSubTotal,
  BillTotalAmount,
  PromoCodeDetailGroup
} from '../components/presentations/billCalculator'

class BillCalculator extends React.PureComponent {
  state = {
    billPerson: 0,
    billSubTotal: 0,
    billTotalAmount: 0,
    discountBillSubTotal: 0,
    promoCode: '',
    promoCodeDetailList: [],
    defaultPromoDetailList: [],
    promoCodeListForBillCal: []
  }
  
  componentDidMount = () => {
    const defaultPromoDetailList = this.props.promoCodeList.filter(
      promoCode => promoCode.mainPromotion
    )

    this.setState({ defaultPromoDetailList })
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (
      prevState.promoCodeListForBillCal !==
        this.state.promoCodeListForBillCal &&
      this.state.promoCodeListForBillCal
    ) {
      this.calCulateTotalAmount()
    }

    if (prevState.billPerson !== this.state.billPerson) {
      this.veriflyPromoCodeListForBillCal()
    }
  }

  
  handlerOnChange = evt => {
    const { name, value } = evt.target

    if (name === 'billPerson') {
      const billSubTotal = this.calBillSubTotal(value)

      this.setState(
        {
          [name]: value,
          promoCode: '',
          billSubTotal
        },
        () => {
          this.checkBillSubTotalForDefaultPromotion()
        }
      )
    } else {
      this.setState({
        [name]: value
      })
    }
  }

  handlerOnClickCheckCode = () => {
    const promoCodeDetail = SearchPromoCode(
      this.props.promoCodeList,
      this.state.promoCode
    )

    if (promoCodeDetail) {
      this.pushToPromoCodeListForBillCal(promoCodeDetail, false)
    } else alert('Promo Code Not Found')
  }

  
  calBillSubTotal = billPerson => {
    const { pricePerPerson } = this.props
    const { billSubTotal } = this.state

    return billPerson ? pricePerPerson * billPerson : billSubTotal
  }

  checkBillSubTotalForDefaultPromotion = () => {
    const {
      billPerson,
      billSubTotal,
      defaultPromoDetailList,
      promoCodeListForBillCal
    } = this.state
    let promoCodeList = []

    defaultPromoDetailList.map(defaultPromoDetail => {
      if (
        VeriflyPromoCode(billPerson, billSubTotal, defaultPromoDetail).status &&
        !SearchPromoCode(promoCodeListForBillCal, defaultPromoDetail.code)
      ) {
        this.pushToPromoCodeListForBillCal(defaultPromoDetail, true)
      }
    })
  }

  pushToPromoCodeListForBillCal = (promoCodeDetail, checkMainPromo) => {
    const { billPerson, billSubTotal } = this.state

    if (checkMainPromo) {
      this.setState(prevState => ({
        promoCodeListForBillCal: [
          ...prevState.promoCodeListForBillCal,
          promoCodeDetail
        ]
      }))
    } else {
      const veriflyResult = VeriflyPromoCode(
        this.state.billPerson,
        this.state.billSubTotal,
        promoCodeDetail
      )

      if (veriflyResult.status) {
        this.setState(prevState => ({
          promoCodeListForBillCal: [
            ...prevState.promoCodeListForBillCal,
            promoCodeDetail
          ],
          promoCode: ''
        }))
      } else alert(veriflyResult.errorMsg)
    }
  }

  veriflyPromoCodeListForBillCal = () => {
    const { billPerson, billSubTotal, promoCodeListForBillCal } = this.state
    let veriflyPromoStatus
    let newPromoCodeListForBillCal = []

    promoCodeListForBillCal.map(promoCodeForBillCal => {
      veriflyPromoStatus = VeriflyPromoCode(
        billPerson,
        billSubTotal,
        promoCodeForBillCal
      )

      if (veriflyPromoStatus.status) {
        newPromoCodeListForBillCal.push(promoCodeForBillCal)
      }
    })

    this.setState({
      promoCodeListForBillCal: newPromoCodeListForBillCal
    })
  }

  calCulateTotalAmount = () => {
    const {
      billPerson,
      billSubTotal,
      promoCodeDetailList,
      discountBillSubTotal,
      promoCodeListForBillCal
    } = this.state
    let billSubTotalForCal = billSubTotal
    let discountAmount = 0
    let allDiscountAmount = 0
    let discountSubTotalTmp = 0
    let tmpPromoCodeDetailList = []

    promoCodeListForBillCal
      .filter(promoCodeForBillCal => promoCodeForBillCal.promoType === 2)
      .map(promoCodeForBillCal => {
        discountAmount = this.props.pricePerPerson * promoCodeForBillCal.calNum
        
        discountSubTotalTmp = billSubTotalForCal - discountAmount
        billSubTotalForCal = discountSubTotalTmp

        tmpPromoCodeDetailList.push({
          code: promoCodeForBillCal.code,
          describe: promoCodeForBillCal.describe,
          discountAmount: GetDigitFloat(discountAmount, 2)
        })
      })

    promoCodeListForBillCal
      .filter(promoCodeForBillCal => promoCodeForBillCal.promoType === 1)
      .map(promoCodeForBillCal => {
        discountAmount = billSubTotalForCal * promoCodeForBillCal.calNum
        allDiscountAmount += discountAmount

        tmpPromoCodeDetailList.push({
          code: promoCodeForBillCal.code,
          describe: promoCodeForBillCal.describe,
          discountAmount: GetDigitFloat(discountAmount, 2)
        })
      })

    const billTotalAmount =
      discountSubTotalTmp !== 0
        ? discountSubTotalTmp - allDiscountAmount
        : billSubTotal - allDiscountAmount
        
    this.setState({
      promoCodeDetailList: tmpPromoCodeDetailList,
      discountBillSubTotal: discountSubTotalTmp,
      billTotalAmount
    })
  }

  resetState = () => {
    this.setState({
      billPerson: 0,
      billSubTotal: 0,
      billTotalAmount: 0,
      discountBillSubTotal: 0,
      promoCode: '',
      usedPromoCodeList: [],
      promoCodeDetailList: []
    })
  }

  render () {
    const { pricePerPerson } = this.props

    return (
      <div className="card text-white bg-dark">
        <div className="card-header">Bill Calculator</div>
        <div className="card-body">
          <BillCalSubTotal
            buffePrice={pricePerPerson}
            personInputName={'billPerson'}
            personInputValue={this.state.billPerson}
            handlerOnChange={this.handlerOnChange}
            subTotal={this.state.billSubTotal}
            discountBillSubTotal={this.state.discountBillSubTotal}
          />
          <PromoCodeDetailGroup
            promoCodeDetailList={this.state.promoCodeDetailList}
          />
          <InputPromoCode
            promoCodeInputName="promoCode"
            promoCodeInputValue={this.state.promoCode}
            handlerOnChange={this.handlerOnChange}
            handlerOnClickCheckCode={this.handlerOnClickCheckCode}
          />
          <BillTotalAmount
            billTotalAmount={GetDigitFloat(this.state.billTotalAmount, 2)}
            handlerOnClickClearBtn={this.resetState}
          />
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    pricePerPerson: state.BuffePrice.pricePerPerson,
    promoCodeList: state.PromoCode.promoCodeList
  }
}

export default connect(mapStateToProps)(BillCalculator)
