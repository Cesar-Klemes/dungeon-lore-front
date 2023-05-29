<template>
  <v-container>
    <v-row class="mb-2">
      <h2 style="text-transform: capitalize; margin: auto">{{ $route.name }}</h2>
    </v-row>
    <v-row>
      <CardDamageType :damageTypes="damageTypes"/>
    </v-row>
  </v-container>
</template>

<script>
import CardDamageType from "~/components/cards-menu/CardDamageType.vue";

export default {
  name: "index.vue",
  components: {CardDamageType},

  async asyncData({ $axios }) {
    const damageTypes = await $axios.$get('https://www.dnd5eapi.co/api/damage-types')
    return {
      damageTypes: damageTypes.results,
    }
  }
}
</script>

<style scoped>

</style>
