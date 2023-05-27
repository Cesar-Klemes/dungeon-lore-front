<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      style="width: auto"
    >
      <v-list>
        <v-list-item to="/">
          <v-list-item-action>
            <v-icon class="red--text">mdi-book-open-page-variant</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="red--text">The Spellbook</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-group>
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




<!--        <v-list-item-->
<!--          v-for="(item, i) in items"-->
<!--          :key="i"-->
<!--          :to="item.to"-->
<!--          router-->
<!--          exact-->
<!--        >-->
<!--          <v-list-item-action>-->
<!--            <v-icon :class="{ 'red&#45;&#45;text': item.icon === 'mdi-book-open-page-variant' }">{{ item.icon }}</v-icon>-->
<!--          </v-list-item-action>-->
<!--          <v-list-item-content>-->
<!--            <v-list-item-title :class="{ 'red&#45;&#45;text': item.title === 'The Spellbook' }">{{ item.title }}</v-list-item-title>-->
<!--          </v-list-item-content>-->
<!--        </v-list-item>-->
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="miniVariant = !miniVariant" />
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
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
          icon: '',
          title: 'Proficiencies',
          to: '/'
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
.red--text {
  color: red;
}
</style>
