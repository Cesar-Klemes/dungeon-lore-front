<template>
  <div>
    <v-row>
      <v-col v-for="feature in features" cols="4">
        <v-card min-height="200px" min-width="200px">
          <v-card-title>{{ feature.name }}</v-card-title>
          <v-divider/>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "CardFeatures",
  props: {
    features: {
      type: Array,
      default: () => [],
    }
  }
}
</script>

<style scoped>

</style>
