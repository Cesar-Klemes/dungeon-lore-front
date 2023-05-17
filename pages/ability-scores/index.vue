<template>
  <v-container>
    <v-row>
      <CardAbilityScores :abilityScores="abilityScores"/>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "index.vue",

  async asyncData({ $axios }) {
    const abilityScores = await $axios.$get('https://www.dnd5eapi.co/api/ability-scores')
    return {
      abilityScores: abilityScores.results,
    }
  }
}
</script>

<style scoped>

</style>
