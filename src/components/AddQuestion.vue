<template>
  <div class="home">
    <div class="side-bar"></div>
    <div>
      <p class="ask-txt">Ask a question</p>
      <div class="txt-good">
        <p style="font-size: 18px">Writing a good question</p>
        <p style="font-size: 16px">
          You’re ready to ask a programming-related question and this form will help guide you
          through<br />
          the process. Looking to ask a non-programming question? See the topics here to find a
          relevant site.
        </p>
        <p style="font-size: 12px">Summarize your problem in a one-line title.</p>
        <p style="font-size: 12px">Describe your problem in more detail.</p>
        <p style="font-size: 12px">Describe what you tried and what you expected to happen.</p>
        <p style="font-size: 12px">
          Add “tags” which help surface your question to members of the community.
        </p>
        <p style="font-size: 12px">Review your question and post it to the site.</p>
      </div>
    </div>
    <div>
      <p style="font-size: 18px bold; margin: 10px">Title</p>
      <p style="font-size: 12px; margin: 10px">
        Be specific and imagine you’re asking a question to another person.
      </p>
      <q-input
        outlined
        v-model="ph"
        placeholder="e.g Is there an R function for finding the index of an element in a vector?"
        :dense="dense"
        class="title-input"
      />
      <CusBtn label="Next" color="blue" @click="LoginPage" class="next-btn" />
    </div>
    <p style="font-size: 18px bold; margin: 10px">What are the details of your problem?</p>
      <p style="font-size: 12px; margin: 10px">
        intrdue the problem and expand on what you put in the title, Minimum 20 characters.
      </p>
    <div class="q-pa-md q-gutter-sm">
    <q-editor
      v-model="editor"
      :definitions="{
        bold: {label: 'Bold', icon: null, tip: 'My bold tooltip'}
      }"
    />
  </div>
  <p style="font-size: 18px bold; margin: 10px">What did you try and what were you expecting?</p>
      <p style="font-size: 12px; margin: 10px">
        Discribe what you tried, what you expected to happen, and what actually resuted, Minimum 20 characters.
      </p>
    <div class="q-pa-md q-gutter-sm">
    <q-editor
      v-model="editor"
      :definitions="{
        bold: {label: 'Bold', icon: null, tip: 'My bold tooltip'}
      }"
    />
  </div>
  <div>
    <p style="font-size: 18px bold; margin: 10px">What did you try and what were you expecting?</p>
      <p style="font-size: 12px; margin: 10px">
        Discribe what you tried, what you expected to happen, and what actually resuted, Minimum 20 characters.
      </p>
      <q-select
        filled
        v-model="model"
        multiple
        :options="options"
        counter
        max-values="5"
        hint="Max 5 selections"
        style="margin: 10px;"
      />
      </div>
  </div>
</template>

<script setup>
import CusBtn from 'src/components/molecules/CustomButton.vue'
import { ref } from 'vue'
const editor = ref(' text...')
const model = ref(null)

const options = [
  'JavaScript',
  'TypeScript',
  'Vue.js',
  'Nuxt.js',
  'Quasar',
  'React',
  'Next.js',
  'Angular',
  'Svelte',
  'SolidJS',
  'Node.js',
  'Express.js',
  'NestJS',
  'GraphQL',
  'MongoDB',
  'PostgreSQL',
  'MySQL',
  'SQLite',
  'Python',
  'Django',
  'Flask',
  'FastAPI',
  'Ruby',
  'Ruby on Rails',
  'PHP',
  'Laravel',
  'Symfony',
  'Go (Golang)',
  'Rust',
  'C',
  'C++',
  'C#',
  '.NET',
  'Java',
  'Spring Boot',
  'Kotlin',
  'Swift',
  'Objective-C',
  'Flutter',
  'Dart',
  'React Native',
  'R',
  'MATLAB',
  'Scala',
  'Haskell',
  'Elixir',
  'Erlang',
  'Perl',
  'Shell Script',
  'Bash',
  'PowerShell'
]
</script>

<style>
.ask-txt {
  font-size: 32px;
  margin: 10px;
}
.txt-good {
  border: 1px solid blue;
  border-radius: 10px;
  background-color: rgb(146, 225, 252);
  opacity: 90%;
  padding: 15px;
  width: fit-content;
  margin: 10px;
}
.title-input {
  max-width: 850px;
  margin: 10px;
}
.next-btn{
  margin: 10px;
}
</style>
