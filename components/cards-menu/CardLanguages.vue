<template>
  <div>
    <v-row>
      <v-col v-for="language in languages" cols="4">
        <v-card min-height="200px" min-width="200px">
          <v-card-title>{{ language.name }}</v-card-title>
          <v-divider/>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "CardLanguages",
  props: {
    languages: {
      type: Array,
      default: () => [],
    }
  }
}
</script>

<style scoped>

</style>
