<template>
  <v-container>
    <v-row class="mb-2">
      <h2 style="text-transform: capitalize; margin: auto">{{ $route.name }}</h2>
    </v-row>
    <v-row>
      <CardFeatures :features="features"/>
    </v-row>
  </v-container>
</template>

<script>
import CardFeatures from "~/components/cards-menu/CardFeatures.vue";

export default {
  name: "index.vue",
  components: {CardFeatures},

  async asyncData({ $axios }) {
    const features = await $axios.$get('https://www.dnd5eapi.co/api/features')
    return {
      features: features.results,
    }
  }
}
</script>

<style scoped>

</style>
