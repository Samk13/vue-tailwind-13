<template>
  <div id="app" class="bg-gray-900">
    <my-header class="text-white"/>
    <router-view class="container h-full m-auto"></router-view>
    <my-footer/>
  </div>
</template>

<script>
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"
export default {
  name: "app",
  components: {
    "my-header": Header,
    "my-footer": Footer
  }
}
</script>

<style>
</style>