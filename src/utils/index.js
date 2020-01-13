import moment from 'moment'
import { fetchUsersPending, fetchUsersSuccess, fetchUsersError } from '../actions'

const firstDayOfMonth = date => date.startOf('month').format('d');
const daysInMonth = month => month.daysInMonth();
const getDayOfWeek = date => date.format('d');

export const getAllDates = date => {
  let dates = [];

  const prevMonth = moment(date).subtract(1, 'month');
  const daysInPrevMonth = daysInMonth(prevMonth);

  const daysInSelectedMonth = daysInMonth(date);
  const firstDayOfSelectedMonth = firstDayOfMonth(date);

  const nextMonth = moment(date).add(1, 'month');
  let firstDayOfNextMonth = firstDayOfMonth(nextMonth);

  for (let d = daysInPrevMonth-firstDayOfSelectedMonth; d <= daysInPrevMonth; d++){
    const newDate = moment(d + '.' + prevMonth.format("MM.YYYY"), "DD.MM.YYYY");
    dates.push(newDate);
  }

  for (let d = 1; d <= daysInSelectedMonth; d++){
    const newDate = moment(d + '.' + date.format("MM.YYYY"), "DD.MM.YYYY");
    dates.push(newDate);
  }

  if(firstDayOfNextMonth != 6){
    for (let d = 1; d <= 6-firstDayOfNextMonth; d++){
      const newDate = moment(d + '.' + nextMonth.format("MM.YYYY"), "DD.MM.YYYY");
      dates.push(newDate);
    }
  }

  return dates
}

export const getUsersPerDay = (date, users) => {
  const dates = getAllDates(date);

  return dates.map(date => ({
    date: date, 
    users: users.filter(user =>
        date.isSameOrAfter(moment(user.firstDate, "DD.MM.YYYY")) 
        && date.isSameOrBefore(moment(user.lastDate, "DD.MM.YYYY"))
    ) 
  }))
}

export const fetchUsersAction = (selectedDate = moment()) =>
  async (dispatch) => {
    dispatch(fetchUsersPending());
    await fetch('/src/api/generated.json')
    .then(response => response.json())
    .then(json => {
      if (json.error) {
          throw(json.error)
      }
      
      json.users = json.users.filter(user => (
        moment(user.firstDate, "DD-MM-YYYY").isSameOrBefore(selectedDate, 'month') &&
        moment(user.lastDate, "DD-MM-YYYY").isSameOrAfter(selectedDate, 'month')
      ))

      dispatch(fetchUsersSuccess(json.users))

      return json.users
    }).catch(error => {
      dispatch(fetchUsersError(error));
    })
  }