<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      style="width: auto; border-right: red 1px solid"
    >
      <v-list class="mt-n1">
        <v-list-item @click.stop="miniVariant = !miniVariant" >
          <v-list-item-action>
            <v-icon v-if="miniVariant">mdi-menu</v-icon>
            <v-icon v-else>mdi-chevron-left</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Menu</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider/>
        <v-list-item to="/" color="red">
          <v-list-item-action>
            <v-icon>mdi-book-open-page-variant</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>The Spellbook</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-group color="red">
          <template v-slot:activator>
            <v-icon>mdi-human</v-icon>
            <v-list-item-title class="pl-8">Character Data</v-list-item-title>
          </template>
          <v-list-item
            v-for="(item, i) in itemsCharacterData"
            :key="i"
            :to="item.to"
            router
            exact
          >
            <v-list-item-action :class="{ 'ml-6': !miniVariant }">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content class="ml-n4">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-toolbar-title class="ml-2"><span style="text-transform: capitalize">TopBar</span></v-toolbar-title>
      <v-spacer />
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :absolute="fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      itemsCharacterData: [
        {
          icon: 'mdi-numeric-9-plus-box-multiple-outline',
          title: 'Ability Scores',
          to: '/ability-scores'
        },
        {
          icon: 'mdi-drama-masks',
          title: 'Alignments',
          to: '/alignments'
        },
        {
          icon: 'mdi-script-text',
          title: 'Languages',
          to: '/languages'
        },
        {
          icon: 'mdi-crosshairs-gps',
          title: 'Skills',
          to: '/skills'
        },
        {
          icon: 'mdi-chess-queen',
          title: 'Proficiencies',
          to: '/proficiencies'
        },
      ],
      items: [
        {
          icon: 'mdi-book-open-page-variant',
          title: 'The Spellbook',
          to: '/'
        },
        {
          icon: 'mdi-bottle-tonic-skull',
          title: 'Conditions',
          to: '/conditions'
        },
        {
          icon: 'mdi-sword-cross',
          title: 'Classes',
          to: '/classes'
        },
        {
          icon: 'mdi-sword',
          title: 'Damage Types',
          to: '/damage-types'
        },
        {
          icon: 'mdi-axe-battle',
          title: 'Equipments',
          to: '/equipments'
        },
        {
          icon: 'mdi-bow-arrow',
          title: 'Equipments Categories',
          to: '/equipments-categories'
        },
        {
          icon: 'mdi-script-text-outline',
          title: 'Features',
          to: '/features'
        },
        {
          icon: 'mdi-magic-staff',
          title: 'Magic Items',
          to: '/magic-items'
        },
        {
          icon: 'mdi-dna',
          title: 'Races',
          to: '/races'
        }
      ],
      miniVariant: true,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
<style>

</style>
