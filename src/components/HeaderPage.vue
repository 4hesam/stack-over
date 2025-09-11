<template>
  <div class="header-sm">
    <div v-if="$q.screen.lt.sm">
      <div class="left-side-sm">
        <div style="width: 100%;justify-content: flex-start;display: flex;align-items: start;">
          <div>
            <q-btn round dense flat icon="menu" class="q-mr-xs">
              <q-menu transition-show="jump-down" transition-hide="jump-up">
                <q-list style="min-width: 100px">
                  <q-item clickable>
                    <q-item-section>Having fun</q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section>Crazy for transitions</q-item-section>
                  </q-item>
                  <q-separator />
                  <q-item clickable>
                    <q-item-section>Mind blown</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </div>
          <div class="logo-head-mb"><q-img src="/src/assets/image/logo-stack.png" /></div>
          <div>
            <q-btn flat label="Prodocts">
              <q-menu transition-show="rotate" transition-hide="rotate">
                <q-list style="min-width: 100px">
                  <q-item clickable>
                    <q-item-section>Stack Overflow for Teams</q-item-section><br />
                  </q-item>
                  <q-item clickable>
                    <q-item-section>Advertising</q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section>Knowledge Solutions </q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section>Labs</q-item-section>
                  </q-item>
                  <q-separator />
                  <q-item clickable>
                    <q-item-section>About the company</q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section>Visit the blog</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </div>
        </div>
      </div>
      <div class="right-side-sm"></div>
    </div>
    <div v-if="$q.screen.lt.md"></div>
    <div v-else></div>
  </div>
</template>

<script setup></script>

<style>
.header-sm {
  background-color: rgb(224, 224, 224);
  border-top: 2px solid orangered;
  /* display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 30px;
  padding: 2px; */
}
.logo-head-mb {
  width: 20px;
  height: 20px;
  direction: left;
}
.m-head {
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* padding-left: 15px; */
  /* padding: 1px; */
  background-color: rgb(182, 180, 180);
  border-top: 1px solid orangered;
}
.left-side-sm {
  display: flex;
}
</style>
