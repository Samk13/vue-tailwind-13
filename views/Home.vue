<template>
  <div class="min-w-screen min-h-screen bg-gray-900 text-white font-sans">
    <my-header></my-header>

    <option-list class="m-auto mt-5"/>

    <my-content class="m-auto"/>

    <my-footer></my-footer>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Content from "../components/Content.vue";
import Footer from "../components/Footer.vue";
import OptionList from "../components/OptionList.vue";

export default {
  components: {
    "my-content": Content,
    "my-header": Header,
    "my-footer": Footer,
    "option-list": OptionList
  }
};
</script>
