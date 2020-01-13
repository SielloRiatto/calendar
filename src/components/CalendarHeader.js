import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { fetchUsersAction } from '../utils'

const CalendarHeader = ({ dateContext, dispatch }) => (
	<div className="calendar-header">
		<div className="month">
      <strong>{dateContext.selectedDate.format("MMMM")} </strong>
			{dateContext.selectedDate.format("YYYY") } г.
		</div>

		<div className="day-nav">
			<button onClick ={ e => {
        e.preventDefault()
        dispatch(fetchUsersAction(dateContext.selectedDate.subtract(1,"month")))
      }}> prev </button>

			<button onClick = { e => {
        e.preventDefault()
        dispatch(fetchUsersAction(dateContext.selectedDate = moment()))
      }}> Сегодня </button>

			<button onClick = { e => {
        e.preventDefault()
        dispatch(fetchUsersAction(dateContext.selectedDate.add(1,"month")))
      }}> next </button>
		</div>
	</div>
)

export default connect()(CalendarHeader)