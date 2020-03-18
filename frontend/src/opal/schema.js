import Http from './http.js'
import _ from 'lodash'

var cache = null;

class Schema{
  load(){
    return Http.getUrl("/api/v0.1/record/").then(function(x){
      cache = x;
    })
  }
  get(key){
    return cache[key];
  }
  fieldLookup(subrecord_name, field_name){
    var modelSchema = this.get(subrecord_name);
    var fieldSchema = _.find(modelSchema.fields, {name: field_name})
    if(!fieldSchema){
      alert("unable to find " + subrecord_name + " " + field_name);
    }
    return _.cloneDeep(fieldSchema);
  }
}
var schema = new Schema()

export default schema

