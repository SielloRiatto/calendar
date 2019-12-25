import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import moment from 'moment'

import CalendarHeader from "./CalendarHeader"
import CalendarBody from "./CalendarBody"

const Calendar = ({ dateContext }) => {
	return(
	  <div className="container">
	  	<CalendarHeader month={dateContext.selectedDate.format("MMMM")} year={dateContext.selectedDate.format("YYYY") } />
	  	{dateContext.usersData.error && <span className='users-list-error'>{dateContext.usersData.error}</span>}
	  	<CalendarBody contain={dateContext.contain} />
	  </div>
	)
}
export default connect()(Calendar)