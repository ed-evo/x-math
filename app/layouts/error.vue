<template>
  <v-layout>
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink to="/">
      Home page
    </NuxtLink>
  </v-layout>
</template>

<script setup lang="ts">
const error = defineProps<{ error: { statusCode: number } }>().error;
const pageNotFound = '404 Not Found';
const otherError = 'An error occurred';

useHead(() => {
  const title =
    error.statusCode === 404 ? pageNotFound : otherError
  return {
    title
  }
});
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
