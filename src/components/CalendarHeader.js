import React from 'react';

const CalendarHeader = ({month, year}) => {
  return (
  	<div className="calendar-header">
  		<div className="month">
  			{month} 
  			<span className="year">{year}</span> г.
  		</div>
  		<div className="day-nav">
  			<button className="prev"></button>
  			<button className="today">Сегодня</button>
  			<button className="next"></button>
  		</div>
  	</div>
  );
}

export default CalendarHeader;