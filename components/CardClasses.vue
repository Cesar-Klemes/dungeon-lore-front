<template>
  <div>
    <v-row>
      <v-col v-for="classe in classes" cols="4">
        <v-card min-height="200px" min-width="200px">
          <v-card-title>{{ classe.name }}</v-card-title>
          <v-divider/>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "CardClasses",

  props: {
    classes: {
      type: Array,
      default: () => [],
    }
  }
}

</script>

<style scoped>

</style>
