import { connect } from 'react-redux'
import Calendar from '../components/Calendar'
import moment from 'moment'

const getDateContext = dateContext => {
  return dateContext
}

const mapStateToProps = state => ({
  dateContext: getDateContext(state.dateContext)
})

export default connect(mapStateToProps)(Calendar)