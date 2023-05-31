<template>
  <v-container v-if="loading">
    <v-row>
      <v-col cols="4" v-for="x in 12">
        <v-card>
          <v-skeleton-loader type="table-heading, list-item-three-line" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <v-container v-else>
    <v-row class="mb-2">
      <h2 style="text-transform: capitalize; margin: auto">Skills</h2>
    </v-row>
    <v-row>
      <CardSkills :skills="skills" :paramSelected="paramSelected" />
    </v-row>
  </v-container>
</template>

<script>
import CardSkills from "~/components/cards-menu/CardSkills.vue";

export default {
  name: "skillName",
  components: {CardSkills},
  data(){
    return {
      skills: [],
      loading: true,
      paramSelected: ''
    }
  },
  methods: {
    async getSkills() {
      const response = await this.$axios.$get('https://www.dnd5eapi.co/api/skills')
      this.skills = response.results
      let skill = []

      for (const values of this.skills) {
        let detail = await this.$axios.$get('https://www.dnd5eapi.co/api/skills/' + values.index)
        skill.push(detail)
      }

      let updatedSkills = [...this.skills]

      for (let i = 0; i < updatedSkills.length; i++) {
        let values = updatedSkills[i];
        let detail = skill.find(detail => detail.index === values.index);
        if (detail) {
          values.ability_score = detail.ability_score;
          values.desc = detail.desc;
        }
      }

      this.skills = updatedSkills
      this.loading = false
    }
  },
  mounted() {
    this.getSkills()
    if (this.$route.params.skillName) {
      this.paramSelected = this.$route.params.skillName
    }
  }
}
</script>

<style scoped>

</style>
