// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import App from "./App"
import router from "./router"
import "tailwindcss/dist/tailwind.css"
import VueCompositionApi from "@vue/composition-api"

import Ripple from "vue-material-design-ripple"
import "vue-material-design-ripple/dist/vue-material-design-ripple.css"

Vue.directive("ripple", Ripple)

Vue.use(VueCompositionApi)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: { App }
})
