<template>
  <div class="container">
    <h1>{{ theQuestion.question }}</h1>
    <hr class="my-4">
    <p>List of answers</p>
    <div class="space-x-4">
      <button class="bg-green-400 px-4 py-1 rounded-lg">Submit</button>
      <button class="bg-teal-400 px-4 py-1 rounded-lg">Next</button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    theQuestion: Object
  }
}
</script>

