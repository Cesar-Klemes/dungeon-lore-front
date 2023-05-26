<template>
  <v-container>
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

  async asyncData({ $axios }) {
    const alignments = await $axios.$get('https://www.dnd5eapi.co/api/alignments')
    let alignment = []

    for (const value of alignments.results) {
      let detail = await $axios.$get('https://www.dnd5eapi.co/api/alignments/' + value.index)
      alignment.push(detail)
    }

    for (let i = 0; i < alignments.results.length; i++) {
      let value = alignments.results[i];
      let detail = alignment.find(detail => detail.index === value.index);
      if (detail) {
        value.abbreviation = detail.abbreviation;
        value.desc = detail.desc;
      }
    }

    return {
      alignments: alignments.results,
    }
  }
}
</script>

<style scoped>

</style>
