import { connect } from 'react-redux'
import CalendarHeader from '../components/CalendarHeader'
import moment from 'moment'

const getMonth = month => {
  return month
}

const getYear = year => {
  return year
}

const mapStateToProps = state => ({
  month: getMonth(state.dateContext.selectedDate.format("MMMM")),
  year: getYear(state.dateContext.selectedDate.format("YYYY")),
})

export default connect(mapStateToProps)(CalendarHeader)