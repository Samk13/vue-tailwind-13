<template>
  <div class="flex flex-col p-3 my-6 bg-pink rounded-lg">
    <h1 class="p-4 text-4xl">select one:</h1>
    <SelectOneInline v-model="selected" :options="options"/>
    <div class="mt-3 font-mono bg-teal-500 rounded-lg p-4">
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
