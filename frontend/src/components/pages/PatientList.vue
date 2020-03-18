<template>
  <div class="container-fluid">
    <div class="row">
        <div class="col-md-8 offset-md-2">
            <div class="row">
                <div class="col-md-9">
                    <h1 class="text-left">All Patients</h1>
                </div>
                <div class="col-md-3 text-right">
                    <router-link class="btn btn-secondary" :to="{name: 'AddPatient'}">
                        Add Patient
                    </router-link>
                    <something></something>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-8 offset-md-2">
            <div class="py-5" v-for="object in object_list" :key="object.id">
                <router-link class="patient-list-card" :to="{ name: 'PatientDetail', params: {id: object.id}}">
                    <div class="card">
                        <div class="row">
                            <div class="col-md-10 offset-md-1">
                                <div v-for="item in object.demographics" :key="item.id">
                                    <h5 class="card-title text-left">
                                        {{ item.first_name }} {{ item.surname }}
                                        <span class="text-muted">
                                            {{ item.date_of_birth }}
                                        </span>
                                    </h5>
                                </div>
                                <div v-for="item in object.diagnosis" :key="item.id" class="col-sm">
                                    <DiagnosisDisplay :item=item />
                                </div>
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
  </div>
</template>


<script>
import subrecords from '@/components/subrecords'
import Http from '@/opal/http.js'
export default {
  name: 'PatientList',
  components: {
    DiagnosisDisplay: subrecords.diagnosis.display
  },
  data: function(){
    var patients = null;
    return {
        object_list: patients
    }
  },
  created(){
   var self = this;
   Http.getUrl("/api/v0.1/patientlist/all_patients/").then(function(x){
    self.object_list = x;
   });
  }
}
</script>
