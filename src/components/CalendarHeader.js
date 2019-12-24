import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectToday, selectNextMonth, selectPrevMonth } from '../actions'

const CalendarHeader = ({ month, year, dispatch }) => (

	<div className="calendar-header">
		<div className="month">
      {month} 
			<span className="year"> {year}</span> г.
		</div>
		<div className="day-nav">
			<button 
        className="prev"
        onClick = { e => {
          e.preventDefault()
          dispatch(selectPrevMonth())
        }}
      > prev </button>
			<button 
        className="today"
        onClick = { e => {
          e.preventDefault()
          dispatch(selectToday())
        }}
      > Сегодня </button>
			<button 
        className="next"
        onClick = { e => {
          e.preventDefault()
          dispatch(selectNextMonth())
        }}
      > next </button>
		</div>
	</div>
)

CalendarHeader.propTypes = {
  month: PropTypes.func.isRequired,
  year: PropTypes.func.isRequired,
}

export default connect()(CalendarHeader)