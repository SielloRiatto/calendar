import React from 'react'
import { connect } from 'react-redux'

import CalendarHeaderContainer from '../containers/CalendarHeaderContainer'

const CalendarHeaderWrapper = () => (
    <CalendarHeaderContainer />
)

export default connect()(CalendarHeaderWrapper)