<template>
<div>
  <div class="addquestion">
    <p>Trending questions</p>
    <CusBtn label="Ask Question" color="blue" @click="AddQuestion" class="Ask-Question" />
  </div>
  <div>
    <q-select
          filled
          v-model="FilterQuestion"
          :options="options"
          use-chips
          stack-label
          label="Filter"
        />
  </div>
  <div>

  </div>
  <div class="q-pa-lg flex flex-center">
    <q-pagination
      v-model="current"
      color="deep-orange"
      :max="5"
      boundary-links
      class="pagination"
    />
  </div>
</div>
</template>

<script setup>
import CusBtn from 'src/components/molecules/CustomButton.vue'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
const router = useRouter()
const FilterQuestion = ref('Newest')

const options = [
  'Newest', 'Active', 'Bountied', 'Unanswered'
]

const AddQuestion = () => {
  router.push('/ask')
}
const current = ref(1)
//
// const query= `
// query GetQuestions ($pagination:
// QuestionPaginationInput!){
// id
// title
// body
// views
// } `
//  const variables = {
//   pagination: {page: currentPage.value,
//     limit:10
//   }
//  }
</script>

<style>
.addquestion {
  display: flex;
  flex: 1;
  justify-content: end;
}
.Ask-Question{
  position: absolute;
  right: 20px;
}
.pagination{
  align-items: center;
}
</style>
