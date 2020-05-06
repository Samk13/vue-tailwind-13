<template>
  <div class="flex flex-col p-3 my-6 bg-pink rounded-lg">
    <SelectOneInline v-model="selected" :options="options"/>
    <div class="mt-4 font-mono bg-teal rounded-lg p-4">selected: { {{ selected }} }</div>
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
        { value: "third-option", label: "Maybe 🤙🏼" },
        {
          value: "forth-option",
          label: "A long answer to see how long looks 💁🏼‍♀️"
        }
      ]
    };
  }
});
</script>
