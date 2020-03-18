<template>
    <div class="row py-2">
        <div class="col-sm-3">
            <label class="control-label">{{ title_local }}</label>
        </div>
        <div class="col-sm-9">
            <input :list="listId" :value="value.data[field]" @input="updateInput($event.target.value)" :required="required_local" class="form-control" />
            <datalist :id="listId" >
            <option v-for="optionValue in lookup_list_local" v-bind:key="optionValue" v-bind:value="optionValue" />
            </datalist>
        </div>
    </div>
</template>
<script>
import BaseInput from "./BaseInput.js"
import _ from 'lodash'
export default {
  name: 'TextInput',
  mixins: [BaseInput],
  data: function(){
      return {
          listId: _.uniqueId("listId")
      }
  }
}
</script>