<template>
  <div>
    <v-row>
      <v-col v-for="equipment in equipments" cols="4">
        <v-card min-height="200px" min-width="200px">
          <v-card-title>{{ equipment.name }}</v-card-title>
          <v-divider/>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>

export default {
  name: "CardEquipment",
  props: {
    equipments: {
      type: Array,
      default: () => [],
    }
  }
}
</script>

<style scoped>

</style>
