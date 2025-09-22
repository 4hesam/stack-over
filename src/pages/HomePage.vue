<template>
  <div class="home">
    <div class="qustion-menu"><ListQuestion /></div>
  </div>
</template>

<script setup>
import ListQuestion from 'src/components/ListQuestion.vue'
</script>
<style>
.home {
  display: flex;
  justify-content: baseline;
}
</style>
