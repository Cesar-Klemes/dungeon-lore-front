<template>
  <div>
    <v-row>
      <v-col v-for="damage in damageTypes" cols="4">
        <v-card min-height="200px" min-width="200px">
          <v-card-title>{{ damage.name }}</v-card-title>
          <v-divider/>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "CardDamageType",
  props: {
    damageTypes: {
      type: Array,
      default: () => [],
    }
  }
}
</script>

<style scoped>

</style>
