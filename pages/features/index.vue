<template>
  <v-container>
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
