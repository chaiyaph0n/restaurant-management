import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { BillCalculator, ConfigRestuarant, TableReservation } from '../../containers'

const Routing = () => (
  <Switch>
    <Route exact path="/billCall" component={BillCalculator} />
    <Route exact path="/config" component={ConfigRestuarant} />
    <Route exact path="/reservation" component={TableReservation} />
  </Switch>
)

export default Routing
