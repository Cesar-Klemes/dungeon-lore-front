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
    <CardProficiencies :proficiencies="proficiencies" />
  </v-container>
</template>

<script>
import CardProficiencies from "~/components/cards-menu/CardProficiencies.vue";

export default {
  name: "index",
  components: {CardProficiencies},
  data() {
    return {
      proficiencies: [],
      loading: true
    }
  },
  methods: {
    async getProficiencies() {
      const response = await this.$axios.$get('https://www.dnd5eapi.co/api/proficiencies')
      this.proficiencies = response.results

      this.loading = false
    }
  },
  mounted() {
    this.getProficiencies()
  }
}
</script>

<style scoped>

</style>
