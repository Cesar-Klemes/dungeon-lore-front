<template>
  <div>
    <v-row>
      <v-col v-for="ability in abilityScores" cols="4">
        <v-card min-height="200px" min-width="200px">
          <v-card-title>{{ ability.name }}</v-card-title>
          <v-divider/>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "CardAbilityScores",

  props: {
    abilityScores: {
      type: Array,
      default: () => [],
    }
  }
}
</script>

<style scoped>

</style>
