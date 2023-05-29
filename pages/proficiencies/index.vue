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
      <CardProficiencies :proficiencies="proficiencies" />
    </v-row>
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
