<template>
  <div class="container bg-blue-500">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      <card
        title="The Who"
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores aperiam atque error quod earum iusto adipisci, molestias excepturi quam, tempora quas provident fugiat ratione sint perferendis veniam non porro omnis.</card>
      <card
        title="The Why"
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores aperiam atque error quod earum iusto adipisci, molestias excepturi quam, tempora quas provident fugiat ratione sint perferendis veniam non porro omnis.</card>
      <card
        title="The How"
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores aperiam atque error quod earum iusto adipisci, molestias excepturi quam, tempora quas provident fugiat ratione sint perferendis veniam non porro omnis.</card>
    </div>
  </div>
</template>
<script>
import Card from "./Card.vue";

export default {
  components: {
    Card
  }
};
</script>
