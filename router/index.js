import Vue from "vue"
import Router from "vue-router"
import Home from "../views/Home"
import Transitions from "../views/Transitions.vue"
import Ripple from "../views/Ripple.vue"

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/transitions",
      name: "Transitions",
      component: Transitions
    },
    {
      path: "/ripple",
      name: "Ripple",
      component: Ripple
    }
  ]
})
