<template>
   <div class="container-fluid">
        <text-input v-model="formInstance" subrecord="demographics" field="first_name" />
        <text-input v-model="formInstance" subrecord="demographics" field="surname" />
        <date-input v-model="formInstance" subrecord="demographics" field="date_of_birth" />
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