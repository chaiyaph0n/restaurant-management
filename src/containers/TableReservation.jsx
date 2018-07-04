import React from 'react'
import { connect } from 'react-redux'
import { Modal } from '../components/presentations'
import {
  ReservationMenu,
  ReservationTimeGroup,
  ModalReservationDetailEachTime
} from '../components/presentations/tableReservation'
import { addReservationDetail, setReservationList } from '../actions'

class TableReservation extends React.PureComponent {
  state = {
    tableRadioValue: '',
    customerName: '',
    customerPhoneNum: '',
    reserveTime: '12',
    reservationDetailList: [],
    reserveDetailForModal: {
      zone: '',
      time: '',
      reserveDetailList: []
    }
  }
  
  handlerOnChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handlerOnClickReserveBtn = () => {
    const reserveDetail = {
      customerName: this.state.customerName,
      customerPhone: this.state.customerPhoneNum,
      time: this.state.reserveTime,
      zone: this.state.tableRadioValue === 'Counter' ? 'A' : 'B',
      table: this.state.tableRadioValue
    }
    const haveAvialableTable = this.checkAvialableTable(
      this.state.reserveTime,
      this.state.tableRadioValue
    )

    if (haveAvialableTable) {
      this.props.addReservationDetail(reserveDetail)
      this.resetValue()
    } else alert('No available table')
  }

  handlerOnClickViewBtn = (zone, time) => {
    const reserveDetailAtTime = this.props.reservationDetailList.filter(
      reservationDetail =>
        reservationDetail.zone === zone &&
        reservationDetail.time === time.toString()
    )

    this.setState({
      reserveDetailForModal: {
        zone,
        time,
        reserveDetailList: reserveDetailAtTime
      }
    })

    $('#exampleModal').modal('toggle')
  }

  handlerOnClickDeleteReservation = reservationDetailForRemove => {
    const newReservationDetailList = this.props.reservationDetailList.filter(
      reservationDetail => reservationDetail !== reservationDetailForRemove
    )

    const reserveDetailListForModal = {
      zone: this.state.reservationDetailList.zone,
      time: this.state.reserveDetailForModal.time,
      reserveDetailList: this.state.reserveDetailForModal.reserveDetailList.filter(
        reservationDetail => reservationDetail !== reservationDetailForRemove
      )
    }

    this.setState({
      reserveDetailForModal: reserveDetailListForModal
    })

    this.props.setReservationList(newReservationDetailList)
  }

  checkAvialableTable = (time, table) => {
    const avialableTableList = this.props.reservationDetailList.filter(
      reservationDetail =>
        reservationDetail.time === time && reservationDetail.table === table
    )
    
    const maxTable = this.props.restaurantMaxTable

    if (table === 'Counter') return avialableTableList.length < maxTable.Counter
    else if (table === 'P2') return avialableTableList.length < maxTable.P2
    else if (table === 'P4') return avialableTableList.length < maxTable.P4
    else if (table === 'P8') return avialableTableList.length < maxTable.P8
    else return false
  }

  shouldDisablerReserveBtn = () => {
    return !this.state.tableRadioValue || !this.state.customerName
  }

  resetValue = () => {
    this.setState({
      tableRadioValue: '',
      customerName: '',
      customerPhoneNum: '',
      reserveTime: '12',
      reservationDetailList: [],
      reserveDetailForModal: {
        zone: '',
        time: '',
        reserveDetailList: []
      }
    })
  }

  render () {
    return (
      <React.Fragment>
        <div className="card text-white bg-dark mb-4">
          <div className="card-header">Table Reservation</div>
          <div className="card-body">
            <ReservationMenu
              customerNameInputName="customerName"
              customerNameInputValue={this.state.customerName}
              customerPhoneNumInputName="customerPhoneNum"
              customerPhoneNumInputValue={this.state.customerPhoneNum}
              reserveTimeInputName="reserveTime"
              reserveTimeInputValue={this.state.reserveTime}
              handlerOnChange={this.handlerOnChange}
              tableRadioName="tableRadioValue"
              tableRadioValue={this.state.tableRadioValue}
              handlerOnChange={this.handlerOnChange}
            />

            <div className="row justify-content-center mt-3">
              <button className="btn btn-danger mr-3" onClick={this.resetValue}>
                Clear
              </button>
              <button
                className="btn btn-primary"
                onClick={this.handlerOnClickReserveBtn}
                disabled={this.shouldDisablerReserveBtn()}
              >
                Reserve
              </button>
            </div>
          </div>
        </div>

        <ReservationTimeGroup
          reservationDetailList={this.props.reservationDetailList}
          handlerOnClickViewBtn={this.handlerOnClickViewBtn}
        />

        <Modal id="exampleModal">
          <ModalReservationDetailEachTime
            reserveDetailListByTime={this.state.reserveDetailForModal}
            handlerOnClickDelete={this.handlerOnClickDeleteReservation}
          />
        </Modal>
      </React.Fragment>
    )
  }
}

function mapStateToProps (state) {
  return {
    reservationDetailList: state.Reservation.reservationList,
    restaurantMaxTable: state.Reservation.restaurantMaxTable
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addReservationDetail: reserveDetail => {
      dispatch(addReservationDetail(reserveDetail))
    },
    setReservationList: reserveDetail => {
      dispatch(setReservationList(reserveDetail))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableReservation)
