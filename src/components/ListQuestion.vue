<template>
  <div>
    <div class="addquestion">
      <p>Trending questions</p>
      <CusBtn label="Ask Question" color="blue" @click="AddQuestion" class="Ask-Question" />
    </div>
    <div class="filter-live">
      <p class="live-question">Total Questions: {{ totalQuestions }}</p>
      <q-select
        filled
        v-model="FilterQuestion"
        :options="options"
        use-chips
        stack-label
        label="Filter"
        class="filter-menu"
      />
    </div>
    <!--  -->
    <!--  -->
    <div class="list-question">
      <q-card v-for="q in questions" :key="q.id" class="question-card full-width">
        <q-card-section>
          <div class="text-lg font-bold">{{ q.title }}</div>
          <div class="text-sm text-gray-600">
            {{ q.author.username }} • {{ new Date(q.createdAt).toLocaleDateString() }}
          </div>
        </q-card-section>
        <q-card-section>
          <p>{{ q.content }}</p>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat icon="thumb_up" label="Vote" />
          <span class="text-gray-500">{{ q.voteCount }}</span>
        </q-card-actions>
      </q-card>
    </div>
    <!--  -->
    <!--  -->
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
import { ref, onMounted, watch } from 'vue'
const totalQuestions = ref(0)
const current = ref(1)
const router = useRouter()
const FilterQuestion = ref('Newest')
const questions = ref([])
const options = ['Newest', 'Active', 'Bountied', 'Unanswered']

const AddQuestion = () => {
  router.push('/ask')
}

const fetchQuestions = async (page = 1, limit = 5) => {
  const query = `
    query($pagination: QuestionPaginationInput!) {
      questions(pagination: $pagination) {
        total
        questions {
          id
          title
          content
          createdAt
          voteCount
          author {
            username
          }
        }
      }
    }
  `

  const variables = { pagination: { page, limit } }

  const res = await fetch('http://localhost:4000/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables }),
  })

  const result = await res.json()
  questions.value = result.data.questions.questions
  totalQuestions.value = result.data.questions.total
}

// وقتی صفحه عوض شد دوباره دیتا بگیر
watch(current, (val) => {
  fetchQuestions(val, 5)
})

onMounted(() => {
  fetchQuestions(1, 5)
})
</script>

<style>
.addquestion {
  display: flex;
  flex: 1;
  justify-content: end;
}
.Ask-Question {
  position: absolute;
  right: 20px;
}
.pagination {
  align-items: center;
}
.filter-menu {
  width: fit-content;
  position: absolute;
  right: 20px;
}
.live-question {
  font-size: 14px;
}
.filter-live {
  display: flex;
  padding: 20px;
  justify-content: center;
}
.list-question {
  border: 2px solid red;
  width: 100%;
  margin: 0 auto;
  max-width: 1200px; /* اگه کل صفحه می‌خوای، اینو بردار */
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  gap: 16px; /* فاصله بین کارت‌ها */
}
.question-card {
  flex: 1;            /* کارت کش بیاد */
  width: 100%;        /* پر کنه عرض container رو */
  min-height: 220px;
  border-radius: 10px;
  box-sizing: border-box;
  transition: transform 0.2s, box-shadow 0.2s;
}
/* .question-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
} */
</style>
