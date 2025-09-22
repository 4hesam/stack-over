<template>
  <HeaderPage />

  <div>
    <div class="loginpage">
      <q-img src="/src/assets/image/logo-stack.png" class="logo-stack" />

      <h4 class="login-title">LOGIN</h4>
      Email
      <q-input standout="bg-teal text-white" v-model="email" label="Email" class="email-btn" />
      Password
      <q-input
        v-model="password"
        label="Password"
        filled
        :type="isPwd ? 'password' : 'text'"
        class="pass-btn"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
            required
          />
        </template>
      </q-input>
      <div class="btn-login1">
        <q-btn
          style="background: blue; color: white"
          label="Log in"
          class="btn-login"
          @click="handleLogin"
        />
      </div>

      <div v-if="error" class="text-negative q-mt-md">{{ error }}</div>
      <div v-if="token" class="text-positive q-mt-md">Token: {{ token }}</div>
    </div>
  </div>
</template>
<script setup>
import HeaderPage from 'src/components/HeaderPage.vue'
import { ref } from 'vue'
const email = ref('')
const password = ref('')
const isPwd = ref(true)
const error = ref('')
const token = ref('')

const handleLogin = async () => {
  error.value = ''
  try {
const query = `
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      token
      user {
        id
        email
      }
    }
  }
`

    const variables = {
      input: {
        email: email.value,
        password: password.value,
      },
    }

    const res = await fetch('http://localhost:4000/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    })

    const result = await res.json()

    if (result.errors) {
      error.value = result.errors[0].message
    } else {
      token.value = result.data.login.token
      console.log('User:', result.data.login.user)
    }
  } catch (err) {
    error.value = 'خطایی رخ داد!'
    console.error(err)
  }
}
</script>

<style>
body {
  background-color: lightgray;
}
.logo-stack {
  align-items: center;
  width: 85px;
  height: 85px;
  justify-content: center;
  display: block;
  margin: 0 auto;
}
.loginpage {
  width: fit-content;
  padding: 15px 25px;
  border-radius: 10px;
  box-shadow: 0 0 10px 2px;
  margin: 13% auto;
  width: fit-content;
  height: 100%;
  background-color: rgb(255, 255, 255);

  /* help Chat GPT */
  transform: scale(0.8);
}
.email-btn {
  padding-bottom: 2.5px;
}
.pass-btn {
  padding-top: 5px;
  padding-bottom: 5px;
}
.btn-login {
  width: 300px;
}
.btn-login1 {
  padding-top: 10px;
}
.login-title {
  text-align: center;
}
</style>
