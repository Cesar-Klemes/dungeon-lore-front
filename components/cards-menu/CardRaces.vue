<template>
  <div>
    <v-row>
      <v-col v-for="race in races" cols="4">
        <v-card min-height="200px" min-width="200px">
          <v-card-title>{{ race.name }}</v-card-title>
          <v-divider/>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "CardRaces",

  props: {
    races: {
      type: Array,
      default: () => [],
    }
  }
}
</script>

<style scoped>

</style>
