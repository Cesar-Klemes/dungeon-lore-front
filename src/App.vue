<template>
  <v-container>
    <v-row style="min-height: 850px">
      <v-col align-self="center">
        <v-row>
          <v-col cols="auto" class="d-flex justify-center align-center">
            <v-img
              src="@/assets/logo-removebg.png"
              width="225"
              height="235"
            />
          </v-col>
          <v-col cols="auto" align-self="center" class="pl-0 align-center">
            <v-row>
              <v-col>
                <h1 class="title">Dungeon Lore</h1>
              </v-col>
            </v-row>
            <v-row class="mt-n6">
              <v-col>
                <h4>Onde suas aventuras começam!</h4>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-btn class="bg-blue" @click="start()">Começar</v-btn>
                {{ grid }}
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col v-if="grid" cols="6" class="d-flex justify-center align-center bg-blue-grey">

      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
  let grid = false

  function start(){
    grid = true
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
