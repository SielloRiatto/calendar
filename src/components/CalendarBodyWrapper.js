import React from 'react'
import { connect } from 'react-redux'
import CalendarBodyContainer from '../containers/CalendarBodyContainer'

const CalendarBodyWrapper = () => {
  return (
  	<div className="calendar-body">
      <CalendarBodyContainer />
    </div>
  );
}

export default connect()(CalendarBodyWrapper)