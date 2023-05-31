<template>
  <v-row>
    <v-col>
      <v-row>
        <v-col cols="12">
          <v-card width="120vh" style="margin-left: auto; margin-right: auto">
            <v-tabs
              center-active
              show-arrows
              color="red"
              v-model="activeTabIndex"
            >
              <v-tab v-for="skill in skills">{{ skill.name }}</v-tab>
            </v-tabs>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-card width="120vh" class="mt-1" style="margin-left: auto; margin-right: auto">
          <v-row no-gutters>
            <v-col>
              <v-card-title>{{ skills[activeTabIndex].name }}</v-card-title>
            </v-col>
            <v-col cols="auto">
              <v-chip
                label
                :color="getChipColor(skills[activeTabIndex].ability_score.name)"
                outlined
                to="/ability-scores"
                class="mt-3 mr-3"
              >
                {{ skills[activeTabIndex].ability_score.name }}
              </v-chip>
            </v-col>
          </v-row>
          <v-divider style="border-bottom: red 1px solid"/>
          <v-card-title><h5>Description:</h5></v-card-title>
          <v-card-text class="my-3 mb-4" v-for="desc in skills[activeTabIndex].desc">{{ desc }}</v-card-text>
        </v-card>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>

export default {
  name: "CardSkills",
  data() {
    return {
      activeTabIndex: 0,
    }
  },
  methods: {
    getChipColor(name) {
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
    }
  },
  mounted() {
    if (this.paramSelected) {
      this.activeTabIndex = this.skills.findIndex(skill => skill.name === this.paramSelected)
    }
  },
  props: {
    skills: {
      type: Array,
      default: () => [],
    },
    paramSelected: {
      type: String,
      default: ''
    }
  },
}
</script>

<style scoped>

</style>
