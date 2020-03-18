<template>
    <div>
        <field-display display-name="name" :value="item.first_name + ' ' + item.surname"></field-display>
        <field-display display-name="hosp. #" :value="item.hospital_number"></field-display>
        <field-display display-name="nhs #" :value="item.nhs_number"></field-display>
        <field-display display-name="dob" :value="item.date_of_birth"></field-display>
        <field-display display-name="sex" :value="item.sex"></field-display>
    </div>
</template>
<script>
import FieldDisplay from '../../FieldDisplay.vue'

export default {
    name: "Display",
    components: {
        FieldDisplay
    },
    props: ["item"]
}
</script>