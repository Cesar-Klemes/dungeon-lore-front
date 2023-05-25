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
    let scoreDetail = []

    for (const score of abilityScores.results) {
      let detail = await $axios.$get('https://www.dnd5eapi.co/api/ability-scores/' + score.index)
      scoreDetail.push(detail)
    }

    for (let i = 0; i < abilityScores.results.length; i++) {
      let score = abilityScores.results[i];
      let detail = scoreDetail.find(detail => detail.index === score.index);
      if (detail) {
        score.full_name = detail.full_name;
        score.desc = detail.desc;
        score.skills = detail.skills;
      }
    }

    return {
      abilityScores: abilityScores.results,
    }
  }

}
</script>

<style scoped>

</style>
