<template>
  <v-container>
    <v-row>
      <CardAbilityScores :abilityScores="abilityScores"/>
    </v-row>
  </v-container>
</template>

<script>
import CardAbilityScores from "~/components/cards-menu/CardAbilityScores.vue";

export default {
  name: "index.vue",
  components: {CardAbilityScores},

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
