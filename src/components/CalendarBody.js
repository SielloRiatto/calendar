import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import moment from 'moment'

const CalendarBody = ({ selectedDate }) => {
  
  const weekdays = moment.weekdays()
  const weekdaysShort = moment.weekdaysShort()
  const months = moment.months()

  const year = () => { 
    return selectedDate.format("Y") 
  }

  const month = () => { 
    return selectedDate.format("MMMM") 
  }

  const daysInMonth = () => {
    return selectedDate.daysInMonth() 
  }

  const currentDate = () => { 
    return selectedDate.get("date") 
  }

  const currentDay = () => { 
    return selectedDate.format("D") 
  }

  const firstDayOfMonth = () => {
    return selectedDate.startOf('month').format('d')
  }

  const lastDayOfMonth = () => {
    return selectedDate.endOf('month').format('d')
  }

   const lastDayOfWeek = () => {
    return '7'
  }

  let firstBlanks = [];
  for (let i = 0; i < firstDayOfMonth(); i++) {
      firstBlanks.push(
        <div className={"col emptySlot"} role="columnheader" key={i*80}>{""}</div>
      )
  }

  let daysMonth = [];
  for (let d = 1; d <= daysInMonth(); d++) {
      let className = (d == currentDay() ? "day current-day": "day")
      let classLastDayInWeek = (d%7 == 0 ? " col last-col": " col")
      daysMonth.push(
        <div className={ className + classLastDayInWeek } key={d}>
          <span>{d}</span> 
        </div>
      );
  }

  let lastBlanks = [];
  for (let i = 6; i > lastDayOfMonth(); i--) {
      lastBlanks.push(
        <div className={"col emptySlot"} role="columnheader" key={i*70}>{""}</div>
      )
  }


  var totalSlots = [...firstBlanks, ...daysMonth, ...lastBlanks]
  let rows = []
  let cells = []

  totalSlots.forEach((row, i) => {
      if ((i % 7) !== 0) {
          cells.push(row)
      } else {
          let insertRow = cells.slice();
          rows.push(insertRow)
          cells = []
          cells.push(row)
      }
      if (i === totalSlots.length - 1) {
          let insertRow = cells.slice()
          rows.push(insertRow)
      }
  })

  let trElems = rows.map((d, i) => {
      return (
        <div className="row" key={i*100}>
          {d}
        </div>
      );
  })


  return (
  	<div className="calendar-body">

  		<div className="headings" role="row">
        {weekdaysShort.map((day) => 
          <div className="col" role="columnheader" key={day}>{day}</div>
        )}
  		</div>

  		<div className="month-body" role="rowgroup">
  			{trElems}
    	</div>
    </div>
  );
}

CalendarBody.propTypes = {
  selectedDate: PropTypes.object.isRequired,
}

export default connect()(CalendarBody)