<template>
  <div>
    <my-header class="text-white"/>
    <div class="space-y-4 bg-gray-900 text-white font-sans"></div>
    <my-footer/>
  </div>
</template>
<script>
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"

import { ref } from "@vue/composition-api"

export default {
  components: {
    "my-header": Header,
    "my-footer": Footer
  },
  setup() {
    const open = ref(true)

    return {
      open
    }
  }
}
</script>
