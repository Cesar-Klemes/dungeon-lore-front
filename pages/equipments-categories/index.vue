<template>
  <v-container>
    <v-row class="mb-2">
      <h2 style="text-transform: capitalize; margin: auto">{{ $route.name }}</h2>
    </v-row>
    <v-row>
      <CardEquipCategories :equipCategories="equipCategories"/>
    </v-row>
  </v-container>
</template>

<script>
import CardEquipCategories from "~/components/cards-menu/CardEquipCategories.vue";

export default {
  name: "index.vue",
  components: {CardEquipCategories},

  async asyncData({ $axios }) {
    const equipCategories = await $axios.$get('https://www.dnd5eapi.co/api/equipment-categories')
    return {
      equipCategories: equipCategories.results,
    }
  }
}
</script>

<style scoped>

</style>
