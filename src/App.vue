<template>
  <v-container>
    <v-row style="min-height: 850px" class="text-center">
      <v-col align-self="center">
        <v-row>
          <v-col>
            <v-img
              src="@/assets/logo-removebg.png"
              width="225"
              height="235"
              class="mx-auto"
            />
            <h1 class="title">Dungeon Lore</h1>
            <h4>Onde suas aventuras começam!</h4>
            <v-btn
              style="font-size: 20px; font-family: Georgia, serif"
              color="#FF6600"
              class="mt-5 text-capitalize"
              variant="outlined"
              @click="grid = true"
            >
              Começar
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col v-show="grid" cols="6" class="bg-blue-grey">

      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  export default {
    data(){
      return {
        grid: false
      }
    }
  }
</script>

<style>
.title{
  color: #FF6600;
  font-family: "Times New Roman", serif;
}

body {
  background-color: #212121;
  font-family: "Candara Light", fantasy;
  font-size: 20px;
  color: white;
}

::-webkit-scrollbar {
  width: 5px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

.scroll-mobile::-webkit-scrollbar-thumb {
  background-color: #424242;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
