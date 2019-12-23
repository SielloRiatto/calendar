import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import moment from 'moment'

const CalendarBody = ({ dateContext }) => {
  
  const weekdays = moment.weekdays()
  const weekdaysShort = moment.weekdaysShort()
  const months = moment.months()

  const year = () => { return moment.format("Y") }
  const month = () => { return moment.format("MMMM") }
  const daysInMonth = () => { return moment.daysInMonth() }
  const currentDate = () => { return moment.get("date") }
  const currentDay = () => { return moment.format("D") }

  return (
  	<div className="calendar-body">

  		<div className="headings" role="row">
			
        {weekdaysShort.map( (day, i) => 
          <div className="col" role="columnheader" key="{i}">{day}</div>
        )}
        
  		</div>

  		<div className="month-body" role="rowgroup">
  			<div></div>
    	</div>
    </div>
  );
}

export default connect()(CalendarBody)