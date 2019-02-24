import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

import PaymentDialog from './src/vue/PaymentDialog.vue'
import PaymentView from './src/vue/PaymentView.vue'
import BuyTokenDialog from './src/vue/BuyTokenDialog.vue'
import DialogTitleBar from './src/vue/DialogTitleBar.vue'

export {
  PaymentDialog,
  PaymentView,
  DialogTitleBar,
  BuyTokenDialog
}