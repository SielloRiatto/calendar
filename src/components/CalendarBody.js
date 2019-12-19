import React from 'react';


const CalendarBody = () => {
  return (
  	<div className="calendar-body">

  		<div className="headings" role="row">
			<div className="col col1" role="columnheader">Пн.</div>
			<div className="col col2" role="columnheader">Вт.</div>
			<div className="col col3" role="columnheader">Ср.</div>
			<div className="col col4" role="columnheader">Чт.</div>
			<div className="col col5" role="columnheader">Пт.</div>
			<div className="col col6" role="columnheader">Сб.</div>
			<div className="col col7" role="columnheader">Вс.</div>
		</div>

		<div className="month-body" role="rowgroup">
			<div></div>
  		</div>
  	</div>
  );
}

export default CalendarBody;