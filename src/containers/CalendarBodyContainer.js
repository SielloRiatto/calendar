import { connect } from 'react-redux'
import CalendarBody from '../components/CalendarBody'

const getCurrentDate = (currentDate) => {
  return currentDate
}

const mapStateToProps = state => ({
  currentDate: getCurrentDate(state.currentDate)
})

export default connect(mapStateToProps)(CalendarBody)