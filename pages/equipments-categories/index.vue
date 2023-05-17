<template>
  <v-container>
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
