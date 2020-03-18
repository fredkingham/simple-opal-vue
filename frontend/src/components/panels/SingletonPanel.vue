<template>
    <div class="card">
        <div class="card-header">
            <h4>
                {{ schema.get(modelName).display_name }}
                <button class="float-right btn btn-link" v-on:click="edit(item)">
                    <h4>
                    <font-awesome-icon icon="pencil-alt" />
                    </h4>
                </button>
            </h4>
        </div>
        <div class="card-body text-left">
        <component :is="display" :item="item" />
        </div>
    </div>
</template>

<script>
import subrecords from '@/components/subrecords'
import SubrecordModal from '@/components/modals/SubrecordModal.vue'
import dateOfBirthValidation from '@/validators/date_of_birth_validation.js'
import Http from '@/opal/http.js'
import schema from '@/opal/schema.js'
import _ from 'lodash'

export default {
  name: 'SingletonPanel',
  props: ["parent", "modelName"],
  data: function(){
      return {
          item: this.parent[this.modelName][0],
          schema: schema,
          display: subrecords[this.modelName].display
      }
  },
  methods: {
    edit (item) {
        var formData = _.cloneDeep(item);
        var panel = this;
        this.$modal.show(
            SubrecordModal,
            {
                SubrecordForm: subrecords[panel.modelName].form,
                modelName: this.modelName,
                formData: formData,
                validators: [dateOfBirthValidation],
                saveMethod: function(){
                    return Http.saveSubrecord(panel.modelName, formData).then(function(x){
                        Object.assign(panel.parent[panel.modelName][0], x)
                    });
                }
            },
            {
                height: "auto",
            }
        )
    }
  }
}
</script>

