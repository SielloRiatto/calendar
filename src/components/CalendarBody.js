import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import CalendarDate from "./CalendarDate"
import { getUsersPerDay } from "../utils"


const CalendarBody = ({ dateContext }) => {
  moment.updateLocale("ru", { 
    week: { dow: 1, doy: 6 },
    weekdaysShort: ["пн", "вт", "ср", "чт", "пт", "сб", "вс"]
  }); 

  return (
	<div className="calendar-body">
    <div className="headings" role="row">
      { 
        moment.weekdaysShort().map(day => 
        <div className="col" key={day}>{day}</div>
        )
      }
		</div>

		<div className="month-body" role="rowgroup">
      {getUsersPerDay(dateContext.selectedDate, dateContext.usersData.users)
        .map( ({date, isSelectedMonth, users}) => 
          <CalendarDate
            key={"date-" + Math.random()} 
            date={date} 
            isSelectedMonth = {isSelectedMonth}
            usersVacationList={users}
          />
        )
      }
  	</div>
  </div>
  )
}

export default connect()(CalendarBody)