<template>
  <v-container>
    <v-row>
      <CardMagicItems :magicItems="magicItems"/>
    </v-row>
  </v-container>
</template>

<script>
import CardMagicItems from "~/components/cards-menu/CardMagicItems.vue";

export default {
  name: "index.vue",
  components: {CardMagicItems},

  async asyncData({ $axios }) {
    const magicItems = await $axios.$get('https://www.dnd5eapi.co/api/magic-items')
    return {
      magicItems: magicItems.results,
    }
  }
}
</script>

<style scoped>

</style>
