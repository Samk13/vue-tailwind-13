<template>
  <div class="py-4 text-center m-auto md:mx-auto px-5 text-sm tracking-wide">
    <HeaderFcc/>
    <span>yoo !</span>
    <question-box></question-box>
  </div>
</template>

<script>
import QuestionBox from "./QuizComps/QuestionBox.vue";
import HeaderFcc from "./QuizComps/HeaderFcc.vue";
export default {
  components: {
    QuestionBox,
    HeaderFcc
  }
};
</script>
 