import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import moment from 'moment'

const CalendarBody = ({ contain }) => {
  const weekdays = moment.weekdays()
  const weekdaysShort = moment.weekdaysShort()
  const months = moment.months()
  
  return (
  	<div className="calendar-body">

  		<div className="headings" role="row">
        {weekdaysShort.map((day) => 
          <div className="col" role="columnheader" key={day}>{day}</div>
        )}
  		</div>

  		<div className="month-body" role="rowgroup">
  			{contain}
    	</div>
    </div>
  );
}

export default connect()(CalendarBody)