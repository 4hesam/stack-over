<template>
  <div class="q-pa-md">
      <q-drawer v-model="drawer" show-if-above :width="200" :breakpoint="500">
        <q-scroll-area class="fit">
          <q-list padding class="menu-list">
            <q-item active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="home" />
              </q-item-section>

              <q-item-section> Home </q-item-section>
            </q-item>

            <q-item active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="rate_review" />
              </q-item-section>

              <q-item-section> Question </q-item-section>
            </q-item>

            <q-item active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="smart_toy" />
              </q-item-section>

              <q-item-section> AI Assist </q-item-section>
            </q-item>

            <q-item active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="sell" />
              </q-item-section>

              <q-item-section> Tags </q-item-section>
            </q-item>

            <q-item active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="landscape" />
              </q-item-section>

              <q-item-section> Challenges </q-item-section>
            </q-item>

            <q-item active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="chat" />
              </q-item-section>

              <q-item-section> Chat </q-item-section>
            </q-item>

            <q-item active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="article" />
              </q-item-section>

              <q-item-section> Articles </q-item-section>
            </q-item>
            <q-item active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="group" />
              </q-item-section>

              <q-item-section> Users </q-item-section>
            </q-item>
            <q-item active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="apartment" />
              </q-item-section>

              <q-item-section> Companies </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>
    </div>
  <!-- </div> -->
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(false)
</script>

<style></style>
