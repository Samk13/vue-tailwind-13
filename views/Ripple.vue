<template>
  <div class="mt-10">
    <div class="p-5 w-1/2 m-auto rounded-lg bg-teal-900 text-white font-sans" v-ripple>
      <h1 class="text-3xl font-black pr-4 text-orange-500 select-none">test ripple effect:</h1>
      <p class="text-base pt-4 text-gray-200 select-none">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores deserunt eius porro, non sint vel voluptates neque corrupti facilis earum numquam praesentium? Sapiente nemo quisquam vitae dicta fugiat dolore cum?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio itaque optio adipisci fugit, officiis, dolorem atque facilis sequi eaque sapiente accusantium sit tempora porro inventore officia? Nam numquam facilis asperiores?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero beatae odit, quia hic laborum minus molestiae nam veniam non ad, corrupti accusamus quas quisquam quod ipsa officiis optio. Quasi, iure?
      </p>
    </div>
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
