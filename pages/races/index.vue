<template>
  <v-container>
    <v-row class="mb-2">
      <h2 style="text-transform: capitalize; margin: auto">{{ $route.name }}</h2>
    </v-row>
    <v-row>
      <CardRaces :races="races"/>
    </v-row>
  </v-container>
</template>

<script>
import CardRaces from "~/components/cards-menu/CardRaces.vue";

export default {
  name: "index.vue",
  components: {CardRaces},

  async asyncData({ $axios }) {
    const races = await $axios.$get('https://www.dnd5eapi.co/api/races')
    return {
      races: races.results,
    }
  }
}
</script>

<style scoped>

</style>
