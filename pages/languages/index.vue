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
    let language = []

    for (const value of languages.results) {
      let detail = await $axios.$get('https://www.dnd5eapi.co/api/languages/' + value.index)
      language.push(detail)
    }

    for (let i = 0; i < languages.results.length; i++) {
      let value = languages.results[i];
      let detail = language.find(detail => detail.index === value.index);
      if (detail) {
        value.type = detail.type;
        value.typical_speakers = detail.typical_speakers;
        value.script = detail.script;
      }
    }

    return {
      languages: languages.results,
    }
  }
}
</script>

<style scoped>

</style>
