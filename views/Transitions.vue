<template>
  <div class="space-y-4 bg-gray-900 text-white font-sans">
    <my-header/>
    <div class="flex">
      <div class="bg-teal-900 w-1/3 text-center p-4 rounded-lg mx-5">
        <button
          class="bg-white text-xs text-blue-900 p-2 rounded-full border-2 border-green-500 shadow hover:shadow-lg uppercase"
          @click="openFade = !openFade"
        >
          open transition
          <span class="mx-3 text-black">{{ openFade }}</span>
        </button>

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
        >
          open transition
          <span class="mx-3 text-black">{{ openCollapse }}</span>
        </button>
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
        >
          open transition
          <span class="mx-3 text-black">{{ openScale }}</span>
        </button>

        <scale-transition>
          <tailwind-bg
            class="w-6/12 m-auto shadow-lg rounded-lg m-6 mt-4 h-64 bg-teal-500"
            v-if="openScale"
          />
        </scale-transition>
      </div>
    </div>
    <my-footer/>
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
  ScaleTransition
} from "../components/Transitions"

export default {
  components: {
    "my-content": Content,
    "my-header": Header,
    "my-footer": Footer,
    "fade-transition": FadeTransition,
    "collapse-transition": CollapseTransition,
    "scale-transition": ScaleTransition,
    "tailwind-bg": TailwindBg
  },
  setup() {
    const openFade = ref(true)
    const openCollapse = ref(true)
    const openScale = ref(true)

    return {
      openFade,
      openCollapse,
      openScale
    }
  }
}
</script>
