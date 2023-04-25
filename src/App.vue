<template>
  <v-container>
    <v-row>
      <v-col align-self="center">
        <v-row>
          <v-col cols="auto" class="d-flex justify-center align-center">
            <v-img
              src="@/assets/logo-removebg.png"
              width="225"
              height="235"
            />
          </v-col>
          <v-col align-self="center" class="pl-0 align-center">
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
                <v-btn class="bg-blue">Começar</v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="6" class="d-flex justify-center align-center">
        <v-card class="pa-4 bg-blue-grey" max-width="500">
          <p class="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod massa et augue tincidunt, quis bibendum eros bibendum. Nam eget sollicitudin enim. Donec elementum sapien auctor ipsum sollicitudin, in iaculis lectus malesuada. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce sodales euismod orci, at bibendum magna ultrices quis. Sed vehicula erat in augue vehicula fringilla. In dictum nulla vel varius faucibus. Suspendisse potenti. Nulla ornare, est sit amet sollicitudin rutrum, elit lorem dictum quam, at bibendum metus nulla ac turpis. Praesent elementum est vitae felis bibendum, nec lacinia ante laoreet.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod massa et augue tincidunt, quis bibendum eros bibendum. Nam eget sollicitudin enim. Donec elementum sapien auctor ipsum sollicitudin, in iaculis lectus malesuada. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce sodales euismod orci, at bibendum magna ultrices quis. Sed vehicula erat in augue vehicula fringilla. In dictum nulla vel varius faucibus. Suspendisse potenti. Nulla ornare, est sit amet sollicitudin rutrum, elit lorem dictum quam, at bibendum metus nulla ac turpis. Praesent elementum est vitae felis bibendum, nec lacinia ante laoreet.
          </p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
  //
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
