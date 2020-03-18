<template>
    <div v-if="patient" class="row">
        <div class="col-sm">
        <Panel :parent=patient modelName="demographics" />
        </div>
        <div class="col-sm">
        <Panel :parent=episode modelName="diagnosis" />
        </div>
    </div>
</template>


<script>
import Http from '@/opal/http.js'
import Panel from '@/components/panels/Panel.vue'


export default {
  name: 'PatientDetail',
  components: {
    Panel
  },
  data: function(){
    var patient = null;
    var episode = null;
    return {
        patient: patient,
        episode: episode

    }
  },
  created(){
   var self = this;
   Http.getOne("patient", this.$route.params.id).then(function(x){
    self.patient = x;
    self.episode = Object.values(x.episodes)[0]
    if(self.patient.detail == "Authentication credentials were not provided."){
        alert('logged out');
    }
   });
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
