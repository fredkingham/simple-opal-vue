<template>
    <form @submit.prevent="save">
        <ModalBase>
            <template v-slot:header>
                <h5 class="modal-title">{{ subrecordSchema.display_name }}</h5>
            </template>
            <template v-slot:body>
                <component :is="SubrecordForm" :formInstance=formInstance></component>
            </template>
            <template v-slot:footer>
                <button v-if="deleteMethod" type="button" class="btn btn-danger" @click="deleteInstance()">Delete</button>
                <input type="submit" class="btn btn-primary" value="Save" />
                <button type="button" class="btn btn-secondary" @click="$emit('close')">Close</button>
            </template>
        </ModalBase>
    </form>
</template>

<script>

import ModalBase from './ModalBase.vue'
import schema from '@/opal/schema.js'
import FormInstance from '@/opal/form_instance.js'
export default {
  name: 'SubrecordModal',
  props: [
      "SubrecordForm",
      "modelName",
      "formData",
      "saveMethod",
      "deleteMethod",
      "validators"
  ],
  components: {
      ModalBase,
  },
  data: function(){
      return {
          subrecordSchema: schema.get(this.modelName),
          formInstance: new FormInstance(this.formData, this.validators)
      }
  },
  methods: {
      save: function(){
          var modal = this;
          if(!this.formInstance.hasError()){
            this.saveMethod().then(function(){
                modal.$emit('close');
            })
          }
      },
      deleteInstance: function(){
          var modal = this;
          this.deleteMethod().then(function(){
              modal.$emit('close');
          })
      }
  }
}
</script>