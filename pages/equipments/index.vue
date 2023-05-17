<template>
  <v-container>
    <v-row>
      <CardEquipment :equipments="equipments"/>
    </v-row>
  </v-container>
</template>

<script>
import CardEquipment from "~/components/cards-menu/CardEquipment.vue";

export default {
  name: "index.vue",
  components: {CardEquipment},

  async asyncData({ $axios }) {
    const equipments = await $axios.$get('https://www.dnd5eapi.co/api/equipment')
    return {
      equipments: equipments.results,
    }
  }
}
</script>

<style scoped>

</style>
