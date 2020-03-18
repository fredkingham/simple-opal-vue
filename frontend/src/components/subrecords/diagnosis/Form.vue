<template>
    <div class="container-fluid">
        <text-input v-model="formInstance" subrecord="diagnosis" field="condition" :lookup_list="['cough', 'fever']" display-name="Condition">
        </text-input>
        <date-input v-model="formInstance" subrecord="diagnosis" field="date_of_diagnosis">
        </date-input>
    </div>
</template>

<script>
import TextInput from '../../forms/TextInput.vue'
import DateInput from '../../forms/DateInput.vue'

export default {
  name: 'Form',
  props: ["formInstance"],
  components: {
      TextInput, DateInput
  }
}
</script>