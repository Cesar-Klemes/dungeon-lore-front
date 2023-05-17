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
    return {
      alignments: alignments.results,
    }
  }
}
</script>

<style scoped>

</style>
