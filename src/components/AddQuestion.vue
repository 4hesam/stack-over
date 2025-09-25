<template>
  <!-- <div class="home"> -->
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
  <div class="q-pa-md">
    <q-stepper v-model="step" vertical color="primary" animated>
      <q-step :name="1" title="Select campaign settings" icon="settings" :done="step > 1">
        <p style="font-size: 18px; font-weight: bold; margin: 10px">Title</p>
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
        <q-stepper-navigation>
          <q-btn @click="step = 2" color="primary" label="Continue" :disable="!ph" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="2"
        title="Create an ad group"
        caption="Optional"
        icon="create_new_folder"
        :done="step > 2"
      >
        <p style="font-size: 18px; font-weight: bold; margin: 10px">
          What are the details of your problem?
        </p>
        <p style="font-size: 12px; margin: 10px">
          intrdue the problem and expand on what you put in the title, Minimum 20 characters.
        </p>
        <div class="q-pa-md q-gutter-sm">
          <q-editor
            v-model="editor"
            :definitions="{
              bold: { label: 'Bold', icon: null, tip: 'My bold tooltip' },
            }"
          />
        </div>
        <q-stepper-navigation>
          <q-btn @click="step = 3" color="primary" label="Continue" :disable="!ph" />
          <q-btn
            flat
            @click="step = 1"
            color="primary"
            label="Back"
            class="q-ml-sm"
            :disable="!ph"
          />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="3" title="Ad template" icon="assignment" :done="step > 3">
        <p style="font-size: 18px; font-weight: bold; margin: 10px">
          What did you try and what were you expecting?
        </p>
        <p style="font-size: 12px; margin: 10px">
          Discribe what you tried, what you expected to happen, and what actually resuted, Minimum
          20 characters.
        </p>
        <div class="q-pa-md q-gutter-sm">
          <q-editor
            v-model="editor"
            :definitions="{
              bold: { label: 'Bold', icon: null, tip: 'My bold tooltip' },
            }"
          />
        </div>
        <q-stepper-navigation>
          <q-btn @click="step = 4" color="primary" label="Continue" :disable="!ph" />
          <q-btn
            flat
            @click="step = 2"
            color="primary"
            label="Back"
            class="q-ml-sm"
            :disable="!ph"
          />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="4" title="Create an ad" icon="add_comment" :done="step > 4">
        <div>
          <p style="font-size: 18px; font-weight: bold; margin: 10px">
            What did you try and what were you expecting?
          </p>
          <p style="font-size: 12px; margin: 10px">
            Discribe what you tried, what you expected to happen, and what actually resuted, Minimum
            20 characters.
          </p>
          <q-select
            filled
            v-model="modelMultiple"
            multiple
            :options="options"
            use-chips
            stack-label
            :max-values="5"
            label="Tags"
            style="margin: 10px"
          />
        </div>
        <q-stepper-navigation>
          <q-btn @click="step = 5" color="primary" label="Continue" :disable="!ph" />
          <q-btn
            flat
            @click="step = 3"
            color="primary"
            label="Back"
            class="q-ml-sm"
            :disable="!ph"
          />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="5" title="Create an ad" icon="add_comment">
        <q-btn-toggle
          v-model="secondModel"
          spread
          class="my-custom-toggle"
          no-caps
          rounded
          unelevated
          toggle-color="primary"
          color="white"
          text-color="primary"
          :options="[
            {
              label: 'Get private feedback in Staging Ground',
              value: 'Get private feedback in Staging Ground',
            },
            {
              label: 'Post question on Stack Overflow now',
              value: 'Post question on Stack Overflow now',
            },
          ]"
        />
        <q-stepper-navigation>
          <q-btn color="primary" label="Finish" :disable="!ph" />
          <q-btn flat @click="step = 4" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
    <q-step :name="6" title="Create an ad" icon="add_comment"> </q-step>
  </div>

  <!-- </div> -->
</template>

<script setup>
//import CusBtn from 'src/components/molecules/CustomButton.vue'
import { ref } from 'vue'
const editor = ref(' text...')
const ph = ref('')
const dense = ref(false)
const modelMultiple = ref(null)
const step = ref(1)
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
  'PowerShell',
]
const secondModel = ref('one')
// const feedback = ref(null)
// const post = ref(null)

// const feedbackOptions = [
//   { label: 'I want experienced community members to review my question', value: 'review' },
//   { label: 'I want to improve my question', value: 'improve' },
//   { label: 'I can wait for an answer', value: 'wait' },
// ]

// const postOptions = [
//   { label: 'I am sure that my question follows all guidelines', value: 'guidelines' },
//   { label: 'I am confident in my question', value: 'confident' },
//   { label: 'I need answers immediately', value: 'immediate' },
// ]
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
.next-btn {
  margin: 10px;
}
</style>
