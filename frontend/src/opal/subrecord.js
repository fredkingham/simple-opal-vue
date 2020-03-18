import Http from './http.js'


class Subrecord{
  constructor(subrecordName, values){
    this.subrecordName = subrecordName;
    this.values = values;
  }
  save(){
    var http = new Http();
    http.putOne(this.subrecordName, )
  }

}