<template>
    <div style="position: absolute; bottom: 5px; left: 5px; background-color: #424242; border-radius: 5px; opacity: 40%"><span class="px-2">Desenvolvido por Cesar Klemes</span></div>
    <v-scroll-x-reverse-transition>
      <img
        src="./assets/wallpaper.jpg"
        :class="wallpaper"
      >
    </v-scroll-x-reverse-transition>
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
              <h1 class="title mt-10">The Spellbook</h1>
              <h4>Onde suas aventuras de RPG começam!</h4>
              <v-btn
                style="font-size: 25px; font-family: Georgia, serif"
                color="#FF6600"
                class="mt-5 text-capitalize"
                variant="outlined"
                @click="grid = true; wallpaper = 'wallpaper-background2'"
                height="50px"
                width="150px"
              >
                Start
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
        <v-scroll-x-reverse-transition>
          <v-col v-show="grid" cols="6" align-self="center">
            <v-row style="cursor: pointer">
              <v-col cols="auto">
                <div class="div-btn-menu">
                  <v-icon class="mt-1">mdi-play</v-icon>
                </div>
              </v-col>
              <v-col cols="auto" class="mt-1">
                Jogar
              </v-col>
            </v-row>
            <v-row style="cursor: pointer">
              <v-col cols="auto">
                <div class="div-btn-menu">
                  <v-icon class="mt-1">mdi-book-open-page-variant</v-icon>
                </div>
              </v-col>
              <v-col cols="auto" class="mt-1">
                Livro do Jogador
              </v-col>
            </v-row>
          </v-col>
        </v-scroll-x-reverse-transition>
      </v-row>
    </v-container>
</template>

<script lang="ts">
  export default {
    data(){
      return {
        grid: false,
        wallpaper: 'wallpaper-background',
      }
    }
  }
</script>

<style>
.div-btn-menu {
  border: 1px solid white;
  width: 40px;
  height: 40px;
  border-radius: 5px;
}
.div-btn-menu:hover {
  background-color: #424242;
  cursor: pointer;
}
.title{
  color: #FF6600;
  font-family: "Times New Roman", serif;
}

.wallpaper-background {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 80%;
  -webkit-mask-image:-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
  mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
  object-fit: cover;
}

.wallpaper-background2 {
  position: absolute;
  z-index: -1;
  width: 16%;
  height: 100%;
  -webkit-mask-image:-webkit-gradient(linear, left top, right top, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
  mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
  object-fit: cover;
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
