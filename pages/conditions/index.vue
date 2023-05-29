<template>
  <v-container>
  <v-row class="mb-2">
    <h2 style="text-transform: capitalize; margin: auto">{{ $route.name }}</h2>
  </v-row>
  <v-row>
    <CardConditions :conditions="conditions"/>
  </v-row>
</v-container>
</template>

<script>
import CardConditions from "~/components/cards-menu/CardConditions.vue";

export default {
  name: "index.vue",
  components: {CardConditions},

  async asyncData({ $axios }) {
    const conditions = await $axios.$get('https://www.dnd5eapi.co/api/conditions')
    return {
      conditions: conditions.results,
    }
  }
}
</script>

<style scoped>

</style>
