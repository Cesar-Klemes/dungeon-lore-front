<template>
  <v-container>
    <v-row>
      <CardRaces :races="races"/>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "index.vue",

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
