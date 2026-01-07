<template>
  <v-layout>
    <v-app-bar :title="title">
      <v-btn icon to="/"><v-icon>mdi-home</v-icon></v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <NuxtPage />
      </v-container>
    </v-main>
    <v-footer app class="justify-center">
      <span>&copy; {{ new Date().getFullYear() }} — x-math — </span>
      <span class="text-caption">
        <NuxtLink to="/privacy" class="text-grey-darken-1 ml-2">Privacy & Cookies</NuxtLink>
      </span>
    </v-footer>
  </v-layout>
</template>

<script setup lang="ts">
const title = ref('Math Quiz');
</script>
