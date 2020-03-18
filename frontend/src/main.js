import Vue from 'vue/dist/vue.js'
import App from './App.vue'
import DemographicsForm from './components/subrecords/demographics/Form.vue'
import 'bootstrap-scss/bootstrap.scss'
import '@/assets/styles.scss'
import VModal from 'vue-js-modal'

// Font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPencilAlt, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPencilAlt)
library.add(faPlus)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('app', App)

Vue.component('demographics-form', DemographicsForm)



// Modal
Vue.use(VModal, {
  dynamic: true,
  injectModalsContainer: true,
})

Vue.config.productionTip = false
window.Vue = Vue;

