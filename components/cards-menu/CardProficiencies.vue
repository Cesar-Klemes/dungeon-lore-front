<template>
  <div>
    <v-card>
      <v-card-title>Proficiencies</v-card-title>
      <v-divider/>
      <v-card-text>
        <v-row>
          <v-col
            v-for="proficiencie in proficiencies"
            cols="6"

          >
            <v-btn width="100%">{{ proficiencie.name }}</v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "CardProficiencies",

  props: {
    proficiencies: {
      type: Array,
      default: () => [],
    }
  }
}
</script>

