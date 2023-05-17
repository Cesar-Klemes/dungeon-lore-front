<template>
  <v-container>
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

  async asyncData({ $axios }) {
    const languages = await $axios.$get('https://www.dnd5eapi.co/api/languages')
    return {
      languages: languages.results,
    }
  }
}
</script>

<style scoped>

</style>
