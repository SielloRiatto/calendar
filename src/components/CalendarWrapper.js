import React from 'react'
import { connect } from 'react-redux'

import CalendarContainer from "../containers/CalendarContainer"

const CalendarWrapper = () => {
	return(
		<CalendarContainer />
	)
}

export default connect()(CalendarWrapper)