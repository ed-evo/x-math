<template>
  <v-layout>
    <v-app-bar :title="title">
    </v-app-bar>
    <v-main>
      <v-container>
        <NuxtPage />
      </v-container>
    </v-main>
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-layout>
</template>

<script setup lang="ts">
const title = ref('Math Quiz');
</script>

