<template>
  <div class="p-5 container rounded-lg bg-teal-900 rounded-lg shadow-xl space-y-4">
    <h3>sum with composition-API</h3>
    <form id="sumComp" class="space-y-4">
      <input type="number" class="p-2 rounded-lg text-black placeholder-green-500" v-model="num1">
      <input
        type="number"
        class="block p-2 rounded-lg text-black placeholder-green-500"
        v-model="num2"
      >
    </form>
    <p>
      <strong>Sum:</strong>
      {{ sum }}
    </p>
  </div>
</template>
<script>
import { ref, computed } from "@vue/composition-api";
export default {
  name: "CompApi",
  setup() {
    let num1 = ref(0);
    let num2 = ref(0);
    let sum = ref(computed(() => parseInt(num1.value, 10) + parseInt(num2.value, 10)));

    return {
      num1,
      num2,
      sum
    };
  }
};
</script>