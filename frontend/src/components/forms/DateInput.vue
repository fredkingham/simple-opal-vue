<template>
  <div class="row py-2">
      <div class="col-sm-12">
        <div class="row">
            <div class="col-sm-3">
                <label class="control-label">{{ title_local }}</label>
            </div>
            <div class="col-sm-9">
                <input type="date" :class="{'is-invalid': value.errors[field]}" :value="fieldValue" @blur="updateDate($event.target.value)" class="form-control" />
                <div class="invalid-feedback">
                    {{ value.errors[field] }}
                </div>
            </div>
        </div>
      </div>
  </div>

</template>
<script>
import DateUtil from "@/opal/date_util.js"
import BaseInput from "./BaseInput.js"
import moment from 'moment'

export default {
  name: 'DateInput',
  mixins: [BaseInput],
  computed: {
      fieldValue: function(){
          return DateUtil.toMoment(this.value.data[this.field]).format("YYYY-MM-DD");
      }
  },
  methods: {
    updateDate(newValue){
        if(newValue && newValue.length){
            var newMoment = moment(newValue, "YYYY-MM-DD");
            var parsed = DateUtil.toString(newMoment);
            this.updateInput(parsed);
        }
        else{
            this.updateInput(null);
        }
    },
  }
}
</script>