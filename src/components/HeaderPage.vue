<template>
  <div class="head-sm" v-if="$q.screen.lt.sm">
    <div class="left-side-sm">
      <div style="width: 100%; justify-content: flex-start; display: flex; align-items: start">
        <div>
          <q-btn round dense flat icon="menu" class="q-mr-xs" color="black">
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
          <q-btn flat label="Prodocts" color="black">
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
    <div class="right-side-sm">
      <q-icon name="search" color="black" size="20px" />
      <!-- search icon -->
      <q-menu anchor="bottom left" self="top left" class="search-icon">
        <q-card>
          <CusSearchBar :debounce="500" icon="search" @search="searchHandler" />
        </q-card>
      </q-menu>
      <!-- login && Sign UP  -->
      <div class="login-btn-m">
        <CusBtn label="Login" color="blue" outline @click="LoginPage" size="sm" />
      </div>
      <div class="signup-btn-m">
        <CusBtn label="signup" color="blue" @click="SignupPage" size="sm" />
      </div>
    </div>
  </div>
  <!-- <div v-else-if="$q.screen.lt.md"></div> -->
  <div v-else>
    <div class="head-xl">
      <div class="left-side">
        <!-- button && icon image-->
        <div class="btn-head">
          <q-img src="/src/assets/image/logo-stack-overflow.png" class="logo-head" />
          <q-btn flat label="About" color="black" v-if="$q.screen.gt.sm" />
          <q-btn flat label="Prodocts" color="black">
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
          <q-btn flat color="black" label="For Teams" v-if="$q.screen.gt.sm" />
        </div>
      </div>
      <div class="right-side">
        <div class="search-box">
          <CusSearchBar :debounce="500" icon="search" @search="searchHandler" />
        </div>
        <div class="login-btn">
          <CusBtn label="Login" color="blue" outline @click="LoginPage" />
        </div>
        <div class="signup-btn">
          <CusBtn label="SignUp" color="blue" @click="SignupPage" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CusBtn from 'src/components/molecules/CustomButton.vue'
import CusSearchBar from 'src/components/molecules/CustomSearchBar.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
function LoginPage() {
  router.push('/login')
}
function SignupPage() {
  router.push('/Signup')
}
function searchHandler(value) {
  console.log('Search value:', value)
}
</script>

<style>
.head-sm {
  display: flex;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #ffffff;
  border-top: 2px solid orangered;
  border-bottom: 1px solid rgb(0, 0, 0);
}
.head-xl {
  display: flex;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #ffffff;
  border-top: 2px solid orangered;
  border-bottom: 1px solid rgb(0, 0, 0);
}
.logo-head-mb {
  width: 23px;
  height: 23px;
  direction: left;
  padding-top: 5px;
}
.m-head {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.login-btn-m .signup-btn-m {
  margin: 5px;
}
.left-side-sm {
  display: flex;
  /* padding-left: 10px; */
}
.right-side-sm {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;
}
.logo-head {
  width: 80px;
  height: 80px;
}
.left-side {
  /* width: 1000px; */
  display: flex;
}
.right-side {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
}
.search-box {
  width: 100%;
}
</style>
