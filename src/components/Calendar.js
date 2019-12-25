import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import moment from 'moment'

import CalendarHeader from "./CalendarHeader"
import CalendarBody from "./CalendarBody"


const Calendar = ({ dateContext }) => (
  <div className="container">
  	<CalendarHeader month={dateContext.selectedDate.format("MMMM")} year={dateContext.selectedDate.format("YYYY") } />
  	<CalendarBody contain={dateContext.contain} />
  </div>
)

export default connect()(Calendar)