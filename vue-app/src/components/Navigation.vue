<template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click="drawer = !drawer" />
    <v-toolbar-title>My Website</v-toolbar-title>
    <v-spacer />
    <v-btn text>Home</v-btn>
    <v-btn text>About</v-btn>
    <v-btn text>Contact</v-btn>

    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app-bar>
</template>

<script setup>
import { ref } from 'vue';

const drawer = ref(false);
</script>

<style scoped>
.v-app-bar {
  background-color: #2196f3; /* Customize as needed */
}
</style>
