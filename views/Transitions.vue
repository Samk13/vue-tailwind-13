<template>
  <div class="min-w-screen min-h-screen space-y-4 bg-gray-900 text-white font-sans">
    <my-header/>
    <div class="bg-gray-400 h-screen text-center p-4 rounded-lg mx-5">
      <button class="bg-green-400 p-5 rounded-lg hover:shadow-lg uppercase" @click="open = !open">
        open transition
        <span class="mx-3 text-black">{{ open }}</span>
      </button>

      <fade-transition>
        <div class="w-6/12 m-auto rounded-lg m-6 mt-4 h-full bg-orange-500" v-if="open">klsjdf</div>
      </fade-transition>
      <fade-transition>
        <div class="w-6/12 m-auto rounded-lg m-6 mt-4 h-full bg-orange-500" v-if="open">klsjdf</div>
      </fade-transition>
    </div>
    <my-footer/>
  </div>
</template>

<script>
import { ref } from "@vue/composition-api"
import Header from "../components/Header.vue"
import Content from "../components/Content.vue"
import Footer from "../components/Footer.vue"

import {
  FadeTransition,
  CollapseTransition,
  ScaleTransition
} from "../components/Transitions"

export default {
  components: {
    "my-content": Content,
    "my-header": Header,
    "my-footer": Footer,
    "fade-transition": FadeTransition,
    "collapse-transition": CollapseTransition,
    "scale-transition": ScaleTransition
  },
  setup() {
    const open = ref(true)

    return {
      open
    }
  }
}
</script>
