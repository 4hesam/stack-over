<template>
  <div class="addquestion">
    <p>Trending questions</p>
    <CusBtn label="Ask Question" color="blue" @click="AddQuestion" />
  </div>
</template>

<script setup>
import CusBtn from 'src/components/molecules/CustomButton.vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const AddQuestion = () => {
  router.push('/ask')
}
</script>

<style>
.addquestion {
  display: flex;
  flex: 1;
  justify-content: end;
}
</style>
