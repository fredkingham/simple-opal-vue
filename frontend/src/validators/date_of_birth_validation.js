import DateUtil from '@/opal/date_util.js'
import moment from 'moment'


var dateOfBirthValidation = function(formData){
  var dobStr = formData.date_of_birth;
  if(dobStr){
    var dob = DateUtil.toMoment(dobStr);
    var hundrendAndFiftyAgo = moment().subtract(150, "years");
    if(dob.isBefore(hundrendAndFiftyAgo)){
      return {
        date_of_birth: "The date of birth is invalid"
      }
    }
  }
  return {
    date_of_birth: null
  }
}


export default dateOfBirthValidation