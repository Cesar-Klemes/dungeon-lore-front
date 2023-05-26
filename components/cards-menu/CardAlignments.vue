<template>
  <div>
    <v-row>
      <v-col v-for="alignment in alignments" cols="4">
        <v-card min-height="270px" min-width="200px">
          <v-card-title>{{ alignment.name }}</v-card-title>
          <v-divider/>
          <v-card-title>Abbreviation</v-card-title>
          <v-card-subtitle>({{ alignment.abbreviation }})</v-card-subtitle>
          <v-card-text>{{ alignment.desc }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "CardAlignments",

  props: {
    alignments: {
      type: Array,
      default: () => [],
    }
  }
}
</script>

<style scoped>

</style>
