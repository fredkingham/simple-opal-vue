import moment from 'moment'

var DATE_FORMAT = 'DD/MM/YYYY';


class DateUtil{
  static toMoment(someStr){
    return moment(someStr, DATE_FORMAT);
  }
  static toString(someDt){
    return moment(someDt).format(DATE_FORMAT);
  }
}

export default DateUtil