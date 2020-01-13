import React from 'react'
import { connect } from 'react-redux'

import CalendarHeader from "./CalendarHeader"
import CalendarBody from "./CalendarBody"

const Calendar = ({ dateContext, dispatch }) => (
	  <div className="container">
	  	<CalendarHeader dateContext={ dateContext } />
	  	{dateContext.usersData.error && <span className='users-list-error'>{dateContext.usersData.error}</span>}
	  	
	  	<CalendarBody dateContext={ dateContext } />
	  </div>
)

export default connect()(Calendar)