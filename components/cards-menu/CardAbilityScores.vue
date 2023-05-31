<template>
  <div>
    <v-row>
      <v-col v-for="ability in abilityScores" cols="4">
        <v-card min-height="200px" min-width="200px">
          <v-card-title>{{ ability.full_name }}</v-card-title>
          <v-divider style="border-bottom: red 1px solid"/>
          <v-list>
            <v-list-group prepend-item color="red">
              <template v-slot:activator>
                <v-list-item-title>Description:</v-list-item-title>
              </template>
              <template v-slot:prependIcon>
                <v-icon>mdi-text</v-icon>
              </template>
              <v-card-text v-for="desc in ability.desc"><v-list-item>{{ desc }}</v-list-item></v-card-text>
            </v-list-group>
            <v-list-group prepend-item color="red">
              <template v-slot:activator>
                <v-list-item-title>Skills:</v-list-item-title>
              </template>
              <template v-slot:prependIcon>
                <v-icon>mdi-fencing</v-icon>
              </template>
              <v-list-item v-for="skill in ability.skills">
                <v-btn width="100%" to="/skills">{{ skill.name }}</v-btn>
              </v-list-item>
              <v-list-item v-if="!ability.skills || !ability.skills.length">
                <span>No Skills</span>
              </v-list-item>
            </v-list-group>
          </v-list>
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
    },
  },
}
</script>

<style scoped>

</style>
