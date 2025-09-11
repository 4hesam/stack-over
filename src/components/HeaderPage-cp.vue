<template>
  <div>
    <q-page padding class="column q-gutter-md">
      <custom-button label="ثبت" icon="save" color="secondary" @click="onSave" />
      <search-bar @update="onSearch" />
    </q-page>
  </div>
  <q-layout>
    <q-header>
      <!-- mobile -->
      <div v-if="$q.screen.lt.sm">
        <div class="m-head">
          <!-- hamburger menu and lugo -->
          <div style="width: fit-content; justify-content: space-between">
            <q-btn round dense flat icon="menu" class="q-mr-xs">
              <q-img src="/src/assets/image/logo-stack.png" class="logo-head-mb" />
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
          <div class="side-r-head">
            <div>
              <q-icon name="search" />
              <!-- search icon -->
              <q-menu anchor="bottom left" self="top left">
                <q-card>
                  <CusSearchBar :debounce="500" icon="search" @search="searchHandler" />
                </q-card>
              </q-menu>
            </div>

            <!-- login && Sign Up -->
            <div class="log-m">
              <div class="login-btn-m">
                <CusBtn label="Login" color="blue" outline @click="loginHandler" />
              </div>
              <div class="signup-btn-m">
                <CusBtn label="Login" color="blue" @click="loginHandler" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Desktop -->
      <div v-else class="l-head">
        <div>
          <q-img src="/src/assets/image/logo-stack-overflow.png" class="logo-head" />
        </div>
        <div class="btn-head">
          
          <q-btn flat color="white" label="About" />
          |
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
          |
          <q-btn flat color="white" label="For Teams" />
        </div>
        <div class="search-box">
          <CusSearchBar :debounce="500" icon="search" @search="searchHandler" />
        </div>
        <div class="login-btn">
          <CusBtn label="Login" color="blue" outline @click="loginHandler" />
        </div>
        <div class="signup-btn">
          <CusBtn label="SignUp" color="blue" @click="loginHandler" />
        </div>
      </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import CusBtn from 'src/components/molecules/CustomButton.vue'
import CusSearchBar from 'src/components/molecules/CustomSearchBar.vue'
function searchHandler(value) {
  console.log('Search value:', value)
}
</script>

<style>
.logo-head {
  width: 80px;
  height: 80px;
  direction: left;
  /* padding: 5px; */
}
.logo-head-mb {
  width: 20px;
  height: 20px;
  direction: left;
}
.l-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 30px;
  padding: 2px;
  background-color: rgb(182, 180, 180);
  border-top: 2px solid orangered;
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
.btn-head {
  width: 100%;
  /* padding: 8px; */
}
.search-box {
  width: 100%;
  height: 100%;
  /* padding-right: 6px; */
}
.log-m {
  display: flex;
  justify-content: row;
  align-items: flex-start;
  /* help GPT */
  flex-direction: row;
  gap: 5px;
  /*  */
}
.login-btn {
  padding: 5px;
}
.login-btn-m .signup-btn-m {
  display: inline-flex;
  padding: 2.5px;
}
.signup-btn {
  padding: 5px;
}
.side-r-head {
  display: flex;
  justify-content: end;
}
</style>
