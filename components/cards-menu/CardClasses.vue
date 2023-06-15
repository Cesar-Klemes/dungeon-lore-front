<template>
  <v-sheet
    class="mx-auto my-auto"
    elevation="8"
    max-width="1000"
    rounded
  >
    <v-slide-group
      v-model="model"
      class="pa-4"
      selected-class="bg-primary"
      show-arrows
      center-active
    >
      <v-slide-item
        v-for="classe in classes"
        :key="classe.id"
        v-slot="{ isSelected, toggle, selectedClass }"
      >
        <v-card
          color="#212121"
          :class="['ma-4', selectedClass]"
          height="200"
          width="140"
          @click="toggle"
          style="border: red 1px solid"
          rounded
        >
          <div class="icon-container">
            <component :is="iconComponent(classe.name)" class="icon" />
            <div class="icon-label">{{ classe.name }}</div>
          </div>
        </v-card>
      </v-slide-item>
    </v-slide-group>

    <v-expand-transition>
      <v-sheet
        v-if="model != null"
        height="200"
      >
        <div class="d-flex fill-height align-center justify-center">
          <h3 class="text-h6">
            Selected {{ model }}
          </h3>
        </div>
      </v-sheet>
    </v-expand-transition>
  </v-sheet>
</template>

<script>
import icons from "~/helpers/icons";

export default {
  name: "CardClasses",
  components: {
    ...icons
  },
  data: () => ({
    model: null,
  }),
  computed: {
    iconComponent() {
      return (className) => {
        // Converte o nome da classe para CamelCase
        const iconName = className
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join('') + 'Icon'
        // Retorna o componente de ícone correspondente
        return icons[iconName]
      }
    }
  },
  props: {
    classes: {
      type: Array,
      default: () => [],
    }
  }
}

</script>

<style>
.icon-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.icon-label {
  margin-top: 8px;
  text-align: center;
}

.icon {
  fill: white;
  height: 115px;
}
</style>


