import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import moment from 'moment'


const CalendarBody = ({ dateContext }) => {
  
  const weekdays = moment.weekdays();
  const weekdaysShort = moment.weekdaysShort();
  const months = moment.month();

  const year = () => { return dateContext.format("Y") }
  const month = () => { return dateContext.format("MMMM") }
  const daysInMonth = () => { return dateContext.daysInMonth() }
  const currentDate = () => { return dateContext.get("date") }
  const currentDay = () => { return dateContext.format("D") }

  return (
  	<div className="calendar-body">

  		<div className="headings" role="row">
			
      {weekdaysShort.map((day) => 
        <div className="col" role="columnheader">
          {day}
        </div>
      )}
      
		</div>

		<div className="month-body" role="rowgroup">
			<div></div>
  		</div>
  	</div>
  );
}

CalendarBody.propTypes = {
  dateContext: PropTypes.string.isRequired,
}

export default connect()(CalendarBody);