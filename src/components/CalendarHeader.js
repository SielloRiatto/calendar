import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectToday, selectNextMonth, selectPrevMonth } from '../actions'

const CalendarHeader = ({ month, year, dispatch }) => (

	<div className="calendar-header">
		<div className="month">
      <strong>{month} </strong>
			{year} г.
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

export default connect()(CalendarHeader)