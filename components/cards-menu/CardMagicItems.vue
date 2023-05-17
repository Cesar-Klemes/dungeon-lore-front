<template>
  <div>
    <v-row>
      <v-col v-for="item in magicItems" cols="4">
        <v-card min-height="200px" min-width="200px">
          <v-card-title>{{ item.name }}</v-card-title>
          <v-divider/>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "CardMagicItems",
  props: {
    magicItems: {
      type: Array,
      default: () => [],
    }
  }
}
</script>

<style scoped>

</style>
