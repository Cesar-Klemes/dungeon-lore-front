<template>
  <v-container v-if="loading">
    <v-row>
      <v-col cols="4" v-for="x in 6">
        <v-card>
          <v-skeleton-loader type="table-heading, list-item-three-line" />
          <v-skeleton-loader type="list-item-three-line" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <v-container v-else>
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
  data() {
    return {
      abilityScores: [],
      loading: true
    }
  },
  methods: {
    async getAbilityScores() {
      const response = await this.$axios.$get('https://www.dnd5eapi.co/api/ability-scores')
      this.abilityScores = response.results
      let scoreDetail = []

      for (const score of this.abilityScores) {
        let detail = await this.$axios.$get('https://www.dnd5eapi.co/api/ability-scores/' + score.index)
        scoreDetail.push(detail)
      }

      let updatedAbilityScores = [...this.abilityScores]

      for (let i = 0; i < updatedAbilityScores.length; i++) {
        let score = updatedAbilityScores[i];
        let detail = scoreDetail.find(detail => detail.index === score.index);
        if (detail) {
          score.full_name = detail.full_name;
          score.desc = detail.desc;
          score.skills = detail.skills;
        }
      }

      this.abilityScores = updatedAbilityScores
      this.loading = false
    }

  },
  mounted(){
    this.getAbilityScores()
  },
}
</script>

<style scoped>

</style>
