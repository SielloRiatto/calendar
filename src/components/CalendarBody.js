import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import CalendarDate from "./CalendarDate"
import { getUsersPerDay } from "../utils"

moment.updateLocale('ru', {
});

const CalendarBody = ({ dateContext }) => (
	<div className="calendar-body">
    <div className="headings" role="row">
      { moment.weekdaysShort().map(day => 
        <div className="col" role="columnheader" key={day}>{day}</div>
      )}
		</div>

		<div className="month-body" role="rowgroup">
      {getUsersPerDay(dateContext.selectedDate, dateContext.usersData.users)
        .map( ({date, users}) => 
          <CalendarDate
            key={"date-" + Math.random()} 
            date={date} 
            usersVacationList={users}
          />
        )
      }
  	</div>
  </div>
)

export default connect()(CalendarBody)