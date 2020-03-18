class FormInstance{
  constructor(data, validators){
    this.data = data;
    this.validators = validators || [];
    this.errors = {};
  }
  validate(){
    this.validators.forEach(validator => {
      // https://vuejs.org/v2/guide/reactivity.html#Change-Detection-Caveats
      this.errors = Object.assign({}, this.errors, validator(this.data));
    }, this);
  }
  hasError(){
    this.validate();
    return Object.values(this.errors).some(x => x)
  }
}

export default FormInstance