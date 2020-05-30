<template>
  <div class="min-w-screen min-h-screen space-y-4 bg-gray-900 text-white font-sans">
    <option-list class="m-auto"/>
    <my-content class="m-auto"/>
    <comp-api class="m-auto"/>
  </div>
</template>

<script>
import Content from "../components/Content.vue"
import OptionList from "../components/OptionList.vue"
import CompApi from "../components/CompApi.vue"

export default {
  components: {
    "my-content": Content,
    "option-list": OptionList,
    "comp-api": CompApi
  }
}
</script>
