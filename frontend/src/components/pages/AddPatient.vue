<template>
    <form @submit.prevent="save">
        <div class="container">
            <h1>Add Patient</h1>
            <DemographicsForm :formInstance="demographics" />
            <DiagnosisForm :formInstance="diagnosis" />
        </div>
        <input type="submit" class="btn btn-primary" value="Save" />
    </form>
</template>
<script>
import subrecords from '@/components/subrecords'
import Http from "@/opal/http.js"
import FormInstance from "@/opal/form_instance.js"
import dateOfBirthValidation from '@/validators/date_of_birth_validation.js'

const SAVE_URL = "/pathway/detail/add_patient"


export default {
    data: function(){
        return {
            demographics: new FormInstance({}, [dateOfBirthValidation]),
            diagnosis: new FormInstance({})
        }
    },
    methods: {
        save: function(){
            var pathway = this;
            if(!this.demographics.hasError() && !this.diagnosis.hasError()){
                var data = {
                    demographics: [this.demographics.data],
                    diagnosis: [this.diagnosis.data]
                }
                Http.saveUrl(SAVE_URL, data).then(function(x){
                    pathway.$router.push({name: 'PatientDetail', params: {id: x.patient_id}})
                });
            }
        }
    },
    components: {
        DemographicsForm: subrecords.demographics.form,
        DiagnosisForm: subrecords.diagnosis.form
    }
}
</script>