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
    <v-row class="mb-2">
      <h2 style="text-transform: capitalize; margin: auto">{{ $route.name }}</h2>
    </v-row>
    <v-row>
      <CardAlignments :alignments="alignments"/>
    </v-row>
  </v-container>
</template>

<script>
import CardAlignments from "~/components/cards-menu/CardAlignments.vue";

export default {
  name: "index.vue",
  components: {CardAlignments},
  data(){
    return {
      alignments: [],
      loading: true
    }
  },
  methods: {
    async getAlignments() {
      const response = await this.$axios.$get('https://www.dnd5eapi.co/api/alignments')
      this.alignments = response.results
      let alignment = []

      for (const values of this.alignments) {
        let detail = await this.$axios.$get('https://www.dnd5eapi.co/api/alignments/' + values.index)
        alignment.push(detail)
      }

      let updatedAlignments = [...this.alignments]

      for (let i = 0; i < updatedAlignments.length; i++) {
        let values = updatedAlignments[i];
        let detail = alignment.find(detail => detail.index === values.index);
        if (detail) {
          values.abbreviation = detail.abbreviation;
          values.desc = detail.desc;
        }
      }

      this.abilityScores = updatedAlignments
      this.loading = false
    }
  },
  mounted(){
    this.getAlignments()
  },
}
</script>

<style scoped>

</style>
