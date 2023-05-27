<template>
  <div>
    <v-row>
      <v-col v-for="skill in skills" cols="4">
        <v-card min-height="200px" min-width="200px">
          <v-row no-gutters>
            <v-col>
              <v-card-title>{{ skill.name }}</v-card-title>
            </v-col>
            <v-col cols="auto">
              <v-chip
                label
                :color="getChipColor(skill.ability_score.name)"
                outlined
                to="/ability-scores"
                class="mt-3 mr-3"
              >
                {{ skill.ability_score.name }}
              </v-chip>
            </v-col>
          </v-row>
          <v-divider/>
          <v-list>
            <v-list-group prepend-item>
              <template v-slot:activator>
                <v-list-item-title>Description:</v-list-item-title>
              </template>
              <v-card-text v-for="desc in skill.desc"><v-list-item>{{ desc }}</v-list-item></v-card-text>
            </v-list-group>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "CardSkills",
  methods: {
    getChipColor(name) {
      console.log(name)
      if (name === 'CHA') {
        return 'green'
      } else if (name === 'DEX') {
        return 'blue'
      } else if (name === 'CON') {
        return 'red'
      } else if (name === 'INT') {
        return 'yellow'
      } else if (name === 'STR') {
        return 'purple'
      } else if (name === 'WIS') {
        return 'orange'
      }
    },
  },
  props: {
    skills: {
      type: Array,
      default: () => [],
    }
  }
}
</script>

<style scoped>

</style>
