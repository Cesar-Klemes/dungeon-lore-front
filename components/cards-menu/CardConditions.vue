<template>
  <div>
    <v-row>
      <v-col v-for="condition in conditions" cols="4">
        <v-card min-height="200px" min-width="200px">
          <v-card-title>{{ condition.name }}</v-card-title>
          <v-divider/>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "CardConditions",
  props: {
    conditions: {
      type: Array,
      default: () => [],
    }
  }
}
</script>

<style scoped>

</style>
