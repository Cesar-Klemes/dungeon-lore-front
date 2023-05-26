<template>
  <div>
    <v-row>
      <v-col v-for="language in languages" cols="4">
        <v-card min-height="200px" min-width="200px">
          <v-card-title>{{ language.name }}</v-card-title>
          <v-divider/>
          <v-card-title>Type</v-card-title>
          <v-card-subtitle>{{ language.type }}</v-card-subtitle>
          <v-card-title>Typical Speakers</v-card-title>
          <v-row class="ml-1 mt-n6">
            <v-col cols="auto" v-for="speaker in language.typical_speakers">
              <v-chip color="cyan" outlined>{{ speaker }}</v-chip>
            </v-col>
          </v-row>
          <v-card-title>Alphabet</v-card-title>
          <v-card-subtitle v-if="language.script">{{ language.script }}</v-card-subtitle>
          <v-card-subtitle v-else-if="!language.script"><span> No Alphabet</span></v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "CardLanguages",
  props: {
    languages: {
      type: Array,
      default: () => [],
    }
  }
}
</script>

<style scoped>

</style>
