import { connect } from 'react-redux'
import CalendarBody from '../components/CalendarBody'
import moment from 'moment'

const getSelectedDate = selectedDate => {
  return selectedDate
}

const mapStateToProps = state => ({
  selectedDate: getSelectedDate(state.dateContext.selectedDate)
})

export default connect(mapStateToProps)(CalendarBody)