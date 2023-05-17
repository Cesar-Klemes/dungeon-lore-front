<template>
  <v-container>
    <v-row>
      <CardClasses :classes="classes"/>
    </v-row>
  </v-container>
</template>

<script>
import CardClasses from "@/components/CardClasses.vue";

export default {
  name: "index.vue",

  components: {
    CardClasses,
  },

  async asyncData({ $axios }) {
    const classes = await $axios.$get('https://www.dnd5eapi.co/api/classes')
    return {
      classes: classes.results,
    }
  }
}
</script>

<style scoped>

</style>
