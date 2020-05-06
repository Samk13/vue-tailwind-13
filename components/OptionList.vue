<template>
  <div class="container rounded-lg bg-teal-900 rounded-lg shadow-xl">
    <h1 class="text-4xl">select one:</h1>
    <SelectOneInline class="m-auto w-1/2" v-model="selected" :options="options"/>
    <div class="my-3 mx-auto md:w-1/2 text-center font-mono bg-teal-500 rounded-lg p-3">
      selected: {
      <span
        v-if="selected !== null "
        class="text-yellow-500 bg-gray-900 rounded-lg px-2 py-1"
      >{{ selected }}</span>
      <span v-else class="text-yellow-500 bg-gray-900 rounded-lg px-2 py-1">select one option 👆🏼</span>
      }
    </div>
  </div>
</template>
<script>
import SelectOneInline from "./SelectOneInline.vue";
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  components: {
    SelectOneInline
  },
  data() {
    return {
      selected: null,
      options: [
        { value: "first-option", label: "Yes 👍🏼" },
        { value: "second-option", label: "No 👎🏼" },
        { value: "third-option", label: "Maybe 🤙🏼" }
      ]
    };
  }
});
</script>
