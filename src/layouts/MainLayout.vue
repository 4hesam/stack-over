<template>
  <q-layout>
    <q-header>
      <div>
        <!-- mobile -->
        <div v-if="$q.screen.lt.md">
          <div class="m-head">
            <!-- hamburger menu -->
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
            <!-- logo -->
            <div>
              <q-img src="/src/assets/image/logo-stack.png" class="logo-head-mb" />
            </div>
            <!-- Proudoct -->
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
            <!-- search icon -->
            <q-icon name="search" />
            <!-- login && Sign Up -->
            <div class="log-m">
              <div class="login-btn-m">
                <q-btn outline style="color: blue" label="Login" size="xs" />
              </div>
              <div class="signup-btn-m">
                <q-btn style="background: blue; color: white" label="SignUp" size="xs" />
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
            <q-input dark dense standout v-model="text" input-class="text-right" class="q-ml-md">
              <template v-slot:append>
                <q-icon v-if="text === ''" name="search" />
                <q-icon v-else name="clear" class="cursor-pointer" @click="text = ''" />
              </template>
            </q-input>
          </div>
          <div class="login-btn">
            <q-btn outline style="color: blue" label="Login" />
          </div>
          <div class="signup-btn">
            <q-btn style="background: blue; color: white" label="SignUp" />
          </div>
        </div>
      </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup></script>
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
  justify-content: flex-start;
  align-items: center;
  padding-left: 15px;
  padding: 1px;
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
  padding-right: 6px;
}
.log-m {
  display: flex;
  justify-content: row;
  align-items: flex-start;
  /* help from GPT */
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
</style>
