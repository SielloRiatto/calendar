import { connect } from 'react-redux'
import CalendarBody from '../components/CalendarBody'

const getDateContext = dateContext => {
  return dateContext
}

const mapStateToProps = state => ({
  dateContext: getDateContext(state.dateContext)
})

export default connect(mapStateToProps)(CalendarBody)