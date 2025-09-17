<template>
  <q-layout>
    <q-header>
      <HeaderPage />
    </q-header>
    <q-page-container>
      <!-- <HomePage /> -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import HeaderPage from 'src/components/HeaderPage.vue'
// import HomePage from 'src/pages/HomePage.vue'
</script>

<style></style>
