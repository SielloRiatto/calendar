import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchUsersAction } from '../actions'

const CalendarHeader = ({ dateContext, dispatch }) => {
  return(
  	<div className="calendar-header">
  		<div className="month">
        <strong>{dateContext.selectedDate.format("MMMM")} </strong>
  			{dateContext.selectedDate.format("YYYY") } г.
  		</div>
  		<div className="day-nav">
  			<button 
          className="prev"
          onClick ={ e => {
            e.preventDefault()
            dispatch(fetchUsersAction("prev", dateContext.selectedDate.subtract(1,"month")))
          }}
        > prev </button>
  			<button 
          className="today"
          onClick = { e => {
            e.preventDefault()
            dispatch(fetchUsersAction("today", dateContext.selectedDate))
          }}
        > Сегодня </button>
  			<button 
          className="next"
          onClick = { e => {
            e.preventDefault()
            dispatch(fetchUsersAction("next", dateContext.selectedDate.add(1,"month")))
          }}
        > next </button>
  		</div>
  	</div>
  )
}

export default connect()(CalendarHeader)