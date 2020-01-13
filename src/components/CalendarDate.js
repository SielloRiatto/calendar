import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

const CalendarDate = ({ date, usersVacationList }) => {

	const currentDate = () => moment().format("DDMMYYYY");
	const className = date.format("DDMMYYYY") == currentDate() ? 
		"col day current-day" : date.format("d") == 6 ?
		"col day sunday" : date.format("d") == 5 ? 
		"col day saturday" :"col day";

	return(
		<div className={className}>
		    <span>{date.format("D")}</span>
		    <div>{usersVacationList.map(user => 
		  	  <div key={user.name} className="blue">{user.name}</div>
		    )}</div>
		</div>
	)
}

export default connect()(CalendarDate)