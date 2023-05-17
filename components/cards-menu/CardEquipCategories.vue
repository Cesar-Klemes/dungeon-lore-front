<template>
  <div>
    <v-row>
      <v-col v-for="categories in equipCategories" cols="4">
        <v-card min-height="200px" min-width="200px">
          <v-card-title>{{ categories.name }}</v-card-title>
          <v-divider/>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "CardEquipCategories",
  props: {
    equipCategories: {
      type: Array,
      default: () => [],
    }
  }
}
</script>

<style scoped>

</style>
