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
      <CardClasses :classes="classes"/>
    </v-row>
  </v-container>
</template>

<script>
import CardClasses from "~/components/cards-menu/CardClasses.vue";

export default {
  name: "index.vue",
  components: {CardClasses},
  data(){
    return {
      loading: true,
      classes: []
    }
  },
  methods: {
    async getClasses() {
      const response = await this.$axios.$get('https://www.dnd5eapi.co/api/classes')
      this.classes = response.results

      this.loading = false
    }
  },
  mounted(){
    this.getClasses()
  },
}
</script>

<style scoped>

</style>
