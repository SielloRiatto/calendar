import { connect } from 'react-redux'
import CalendarHeader from '../components/CalendarHeader'

const getDateContext = (dateContext) => {
  return dateContext
}

const mapStateToProps = state => ({
  dateContext: getDateContext(state.dateContext)
})

export default connect(mapStateToProps)(CalendarHeader)