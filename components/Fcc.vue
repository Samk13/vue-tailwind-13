<template>
  <div class="py-4 text-center m-auto md:mx-auto px-5 text-sm tracking-wide">
    <HeaderFcc/>
    <span>yoo !</span>
    <question-box :currentQuestion="quest[index]"></question-box>
  </div>
</template>

<script>
import QuestionBox from "./QuizComps/QuestionBox.vue"
import HeaderFcc from "./QuizComps/HeaderFcc.vue"
export default {
  name: "Fcc",
  components: {
    QuestionBox,
    HeaderFcc
  },
  data() {
    return {
      quest: [
        {
          category: "General Knowledge",
          type: "multiple",
          difficulty: "medium",
          question:
            "Which essential condiment is also known as Japanese horseradish?",
          correct_answer: "Wasabi ",
          incorrect_answers: ["Mentsuyu", "Karashi", "Ponzu"]
        },
        {
          category: "General Knowledge",
          type: "multiple",
          difficulty: "hard",
          question: "Which film star has his statue in Leicester Square?",
          correct_answer: "Charlie Chaplin",
          incorrect_answers: [
            "Paul Newman",
            "Rowan Atkinson ",
            "Alfred Hitchcock"
          ]
        },
        {
          category: "General Knowledge",
          type: "multiple",
          difficulty: "hard",
          question: "Sciophobia is the fear of what?",
          correct_answer: "Shadows",
          incorrect_answers: ["Eating", "Bright lights", "Transportation"]
        },
        {
          category: "General Knowledge",
          type: "multiple",
          difficulty: "easy",
          question:
            "What is on display in the Madame Tussaud&#039;s museum in London?",
          correct_answer: "Wax sculptures",
          incorrect_answers: [
            "Designer clothing",
            "Unreleased film reels",
            "Vintage cars"
          ]
        },
        {
          category: "General Knowledge",
          type: "multiple",
          difficulty: "easy",
          question: "What is the Spanish word for &quot;donkey&quot;?",
          correct_answer: "Burro",
          incorrect_answers: ["Caballo", "Toro", "Perro"]
        },
        {
          category: "General Knowledge",
          type: "multiple",
          difficulty: "hard",
          question:
            "What is the romanized Chinese word for &quot;airplane&quot;?",
          correct_answer: "Feiji",
          incorrect_answers: ["Qiche", "Zongxian", "Huojian"]
        },
        {
          category: "General Knowledge",
          type: "multiple",
          difficulty: "medium",
          question: "When did the website &quot;Facebook&quot; launch?",
          correct_answer: "2004",
          incorrect_answers: ["2005", "2003", "2006"]
        },
        {
          category: "General Knowledge",
          type: "multiple",
          difficulty: "easy",
          question: "What is Tasmania?",
          correct_answer: "An Australian State",
          incorrect_answers: [
            "A flavor of Ben and Jerry&#039;s ice-cream",
            "A Psychological Disorder",
            "The Name of a Warner Brothers Cartoon Character"
          ]
        },
        {
          category: "General Knowledge",
          type: "multiple",
          difficulty: "hard",
          question:
            "In &quot;Battle Cats&quot;, what is Moneko / MISS Moneko&#039;s critical percentage rate?",
          correct_answer: "15%",
          incorrect_answers: ["20%", "10%", "25%"]
        },
        {
          category: "General Knowledge",
          type: "multiple",
          difficulty: "hard",
          question:
            "What is the most commonly used noun in the English language?",
          correct_answer: "Time",
          incorrect_answers: ["Home", "Water", "Man"]
        }
      ],
      index: 0
    }
  }
  /* mounted: function() {
    fetch("https://opentdb.com/api.php?amount=10&category=9&type=multiple", {
      method: "GET"
    })
      .then(res => {
        return res.json()
      })
      .then(data => {
        this.questions = data.results
      })
  } */
}
</script>
 