import moment from 'moment/moment'

export function DateFormatted(date) {
  return moment(date).format('MMMM DD, YYYY')
}
