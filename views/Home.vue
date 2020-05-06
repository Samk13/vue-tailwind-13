<template>
  <div class="min-w-screen min-h-screen space-y-4 bg-gray-900 text-white font-sans">
    <my-header></my-header>
    <Fcc class="m-auto"/>
    <option-list class="m-auto"/>
    <my-content class="m-auto"/>
    <comp-api class="m-auto"/>

    <my-footer></my-footer>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Content from "../components/Content.vue";
import Footer from "../components/Footer.vue";
import OptionList from "../components/OptionList.vue";
import CompApi from "../components/CompApi.vue";
import Fcc from "../components/Fcc.vue";

export default {
  components: {
    "my-content": Content,
    "my-header": Header,
    "my-footer": Footer,
    "option-list": OptionList,
    "comp-api": CompApi,
    Fcc: Fcc
  }
};
</script>
