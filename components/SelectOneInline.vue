<template>
  <div class="flex flex-row">
    <div
      class="bg-teal rounded-lg shadow m-2"
      @click="$emit('input', item.value)"
      v-for="item in options"
      :key="item.value"
    >
      <div class="font-black px-6 py-4 select-none cursor-pointer">{{ item.label }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  props: {
    options: {
      required: true,
      type: Array
    }
  }
});
</script>
