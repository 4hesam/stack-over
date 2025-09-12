<template>
  <q-layout>
    <q-header>
      <HeaderPage />
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import HeaderPage from 'src/components/HeaderPage.vue'
</script>

<style></style>
