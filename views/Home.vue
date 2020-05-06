<template>
  <div class="App min-w-screen min-h-screen flex flex-col bg-grey-lightest font-sans">
    <my-header></my-header>

    <option-list></option-list>

    <my-content></my-content>

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
