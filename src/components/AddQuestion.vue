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
      <p style="font-size: 16px; margin: 10px">
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
  </div>
</template>

<script setup>
import CusBtn from 'src/components/molecules/CustomButton.vue'
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
