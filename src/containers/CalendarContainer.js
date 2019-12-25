import { connect } from 'react-redux'
import Calendar from '../components/Calendar'
import moment from 'moment'

import { selectToday, selectNextMonth, selectPrevMonth, fetchUsersAction } from '../actions'

const getDateContext = dateContext => {
  return dateContext
}

const mapStateToProps = state => ({
  dateContext: getDateContext(state.dateContext)
})

const mapDispatchToProps = dispatch => ({
    fetchUsersAction: fetchUsersAction
})

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)