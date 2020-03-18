<template>
    <component :is="panel" :parent="parent" :modelName="modelName" />
</template>
<script>
import schema from '@/opal/schema.js'
import NonSingletonPanel from "./NonSingletonPanel.vue"
import SingletonPanel from "./SingletonPanel.vue"


export default {
    name: "Panel",
    props: ["parent", "modelName"],
    data: function(){
       if(schema.get(this.modelName)){
           return {
               panel: SingletonPanel
           }
       }
       else{
           return {
               panel: NonSingletonPanel
           }

       }
    }
}
</script>