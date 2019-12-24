import React from 'react'
import { connect } from 'react-redux'
import CalendarBodyContainer from '../containers/CalendarBodyContainer'

const CalendarBodyWrapper = () => (
      <CalendarBodyContainer />
)

export default connect()(CalendarBodyWrapper)