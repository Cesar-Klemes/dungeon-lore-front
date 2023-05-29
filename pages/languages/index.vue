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
      <CardLanguages :languages="languages"/>
    </v-row>
  </v-container>
</template>

<script>
import CardLanguages from "~/components/cards-menu/CardLanguages.vue";

export default {
  name: "index.vue",
  components: {CardLanguages},
  data(){
    return {
      languages: [],
      loading: true
    }
  },
  methods: {
    async getLanguages() {
      const response = await this.$axios.$get('https://www.dnd5eapi.co/api/languages')
      this.languages = response.results
      let language = []

      for (const values of this.languages) {
        let detail = await this.$axios.$get('https://www.dnd5eapi.co/api/languages/' + values.index)
        language.push(detail)
      }

      let updatedLanguages = [...this.languages]

      for (let i = 0; i < updatedLanguages.length; i++) {
        let values = updatedLanguages[i];
        let detail = language.find(detail => detail.index === values.index);
        if (detail) {
          values.type = detail.type;
          values.typical_speakers = detail.typical_speakers;
          values.script = detail.script;
        }
      }

      this.languages = updatedLanguages
      this.loading = false
    }
  },
  mounted(){
    this.getLanguages()
  },
}
</script>

<style scoped>

</style>
