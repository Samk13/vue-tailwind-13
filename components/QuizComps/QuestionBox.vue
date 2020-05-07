<template>
  <div class="container">
    <h1>{{ theQuestion.question }}</h1>
    <hr class="my-4">
    <div v-for="(answer, index) in answers" :key="index">{{ answer}}</div>
    <div class="space-x-4">
      <button class="bg-green-400 px-4 py-1 rounded-lg">Submit</button>
      <button class="bg-teal-400 px-4 py-1 rounded-lg" @click="next">Next</button>
    </div>
  </div>
</template>
<script>
import { computed } from "@vue/composition-api"
export default {
  props: {
    theQuestion: Object,
    next: Function
  },
  setup(props) {
    let answers = computed(() => {
      answers = [...props.theQuestion.incorrect_answers]
      answers.push(props.theQuestion.correct_answer)
      return answers
    })

    return {
      answers
    }
  }
}
</script>

