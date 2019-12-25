import moment from 'moment'
import React from 'react'

const changeCalendar = (changedDate = moment(), users = []) => {

  let year = () => { return changedDate.format("Y")}
  let month = () => { return changedDate.format("MMMM") }
  let daysInMonth = () => { return changedDate.daysInMonth() }
  let currentDate = () => { return changedDate.get("date") }
  let currentDay = () => { return changedDate.format("D") }
  let firstDayOfMonth = () => { return changedDate.startOf('month').format('d') }
  let lastDayOfMonth = () => { return changedDate.endOf('month').format('d') }

  let firstBlanks = [];
  for (let i = 0; i < firstDayOfMonth(); i++) {
      firstBlanks.push(
        <div className={"col emptySlot"} role="columnheader" key={i*80}>{""}</div>
      )
  }

  let daysMonth = [];
  for (let d = 1; d <= daysInMonth(); d++) {
      let className = (d == currentDay() ? "col day current-day": "col day")
      daysMonth.push(
        <div className={ className } key={d}>
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

  return trElems
}

export default changeCalendar