<template>
  <div class="py-4 text-center m-auto md:mx-auto px-5 text-sm tracking-wide">
    <HeaderFcc/>
    <span>yoo !</span>
    <question-box v-if="store.quest.length" :theQuestion="store.quest[index]"></question-box>
  </div>
</template>

<script>
import QuestionBox from "./QuizComps/QuestionBox.vue"
import HeaderFcc from "./QuizComps/HeaderFcc.vue"
import { reactive, ref, onMounted } from "@vue/composition-api"
export default {
  name: "Fcc",
  components: {
    QuestionBox,
    HeaderFcc
  },
  setup() {
    const index = ref(0)
    const store = reactive({
      quest: []
    })

    onMounted(() => {
      fetch("https://opentdb.com/api.php?amount=10&category=9&type=multiple", {
        method: "GET"
      })
        .then(res => {
          return res.json()
        })
        .then(data => {
          store.quest = data.results
        })
    })

    return {
      store,
      index
    }
  }
}
</script>
 