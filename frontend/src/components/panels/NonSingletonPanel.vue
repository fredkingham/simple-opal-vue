<template>
    <div class="card">
    <div class="card-header">
        <h4>{{ schema.get(modelName).display_name }}
            <button class="float-right btn btn-link" v-on:click="add()">
                <h4>
                <font-awesome-icon icon="plus" />
                </h4>
            </button>
        </h4>
    </div>
    <ul class="list-group list-group-flush">
        <li v-for="item in items" class="list-group-item" v-bind:key="item.id">
          <div class="row">
              <div class="col-md-9">
                <component :is="display" :item="item" />
              </div>
              <div class="col-md-3">
                <button class="float-right btn btn-link" v-on:click="edit(item)">
                    <h4>
                    <font-awesome-icon icon="pencil-alt" />
                    </h4>
                </button>
              </div>
          </div>
        </li>
    </ul>
    </div>
</template>

<script>
import _ from 'lodash'
import subrecords from '@/components/subrecords'
import SubrecordModal from '@/components/modals/SubrecordModal.vue'
import Http from '@/opal/http.js'
import schema from '@/opal/schema.js'

export default {
  name: 'NonSingletonPanel',
  props: ["parent", "modelName"],
  data: function(){
      return {
          items: this.parent[this.modelName],
          schema: schema,
          display: subrecords[this.modelName].display
      }
  },
  methods: {
    isPatient(){
        // this isn't nice.
        return !!this.parent["episodes"]
    },
    add () {
        var formData;

        if(this.isPatient()){
            formData = {patient_id: this.parent.id}
        }
        else{
            formData = {episode_id: this.parent.id};
        }
        var panel = this;
        this.$modal.show(
            SubrecordModal,
            {
                SubrecordForm: subrecords[panel.modelName].form,
                modelName: this.modelName,
                formData: formData,
                saveMethod: function(){
                    return Http.saveSubrecord(panel.modelName, formData).then(function(x){
                        panel[panel.parent][panel.modelName].push(x);
                    });
                },
            },
            {
                height: "auto",
            }
        )
    },
    edit (item) {
        var formData = _.cloneDeep(item);
        var panel = this;
        this.$modal.show(
            SubrecordModal,
            {
                SubrecordForm: subrecords.diagnosis.form,
                modelName: this.modelName,
                formData: formData,
                saveMethod: function(formData){
                    return Http.saveSubrecord(panel.modelName, formData).then(function(x){
                        Object.assign(item, x)
                    });
                },
                deleteMethod: function(){
                    return Http.deleteSubrecord(panel.modelName, formData.id).then(function(){
                        // mutating lists is hard...
                        // https://vuejs.org/v2/guide/list.html
                        if(panel.items.length === 1){
                            panel.items.pop()
                        }
                        else{
                            panel.items = panel.items.filter(item => item.id !== formData.id);
                        }
                    });
                }
            },
            {
                height: "auto",
            }
        )
    },
  }
}
</script>
