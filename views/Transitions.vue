<template>
  <div class="space-y-4 bg-gray-900 text-white font-sans">
    <div class="flex">
      <div class="bg-teal-900 w-1/3 text-center p-4 rounded-lg mx-5">
        <button
          class="bg-white text-xs text-blue-900 p-2 rounded-full border-2 border-green-500 shadow hover:shadow-lg uppercase"
          @click="openFade = !openFade"
        >fade transition</button>

        <fade-transition>
          <tailwind-bg
            class="w-1/3 m-auto shadow-lg rounded-lg m-6 mt-4 h-64 bg-teal-500"
            v-if="openFade"
          />
        </fade-transition>
      </div>
      <div class="bg-teal-900 h-screen w-1/3 text-center p-4 rounded-lg mx-5">
        <button
          class="bg-white text-xs text-blue-900 p-2 rounded-full border-2 border-green-500 shadow hover:shadow-lg uppercase"
          @click="openCollapse = !openCollapse"
        >Collapse transition</button>
        <collapse-transition>
          <tailwind-bg
            class="w-6/12 m-auto shadow-lg rounded-lg m-6 mt-4 h-64 bg-teal-500"
            v-if="openCollapse"
          />
        </collapse-transition>
      </div>
      <div class="bg-teal-900 w-1/3 h-screen text-center p-4 rounded-lg mx-5">
        <button
          class="bg-white text-xs text-blue-900 p-2 rounded-full border-2 border-green-500 shadow hover:shadow-lg uppercase"
          @click="openScale = !openScale"
        >Scale transition</button>
        <scale-transition>
          <tailwind-bg
            class="w-6/12 m-auto shadow-lg rounded-lg m-6 mt-4 h-64 bg-teal-500"
            v-if="openScale"
          />
        </scale-transition>
      </div>
      <div class="bg-teal-900 w-1/3 h-screen text-center p-4 rounded-lg mx-5">
        <button
          class="bg-white text-xs text-blue-900 p-2 rounded-full border-2 border-green-500 shadow hover:shadow-lg uppercase"
          @click="opengroup = !opengroup"
        >group transition</button>
        <ListTransitionCss v-for="i in 7" class="list-transition" :key="i">
          <li
            v-if="opengroup"
            :key="i"
            class="m-auto p-5 border bg-gray-900 w-40 mt-1 shadow rounded-lg text-center text-white"
            :style="{'--i': i}"
          >test {{ i }}</li>
        </ListTransitionCss>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/composition-api"
import Header from "../components/Header.vue"
import Content from "../components/Content.vue"
import Footer from "../components/Footer.vue"
import TailwindBg from "../components/TailwindBg.vue"
import {
  FadeTransition,
  CollapseTransition,
  ScaleTransition,
  ListTransitionCss
} from "../components/Transitions"

export default {
  components: {
    "my-content": Content,
    "my-header": Header,
    "my-footer": Footer,
    "fade-transition": FadeTransition,
    "collapse-transition": CollapseTransition,
    "scale-transition": ScaleTransition,
    "tailwind-bg": TailwindBg,
    ListTransitionCss: ListTransitionCss
  },
  setup() {
    const openFade = ref(true)
    const openCollapse = ref(true)
    const openScale = ref(true)
    const opengroup = ref(true)

    return {
      openFade,
      openCollapse,
      openScale,
      opengroup
    }
  }
}
</script>
