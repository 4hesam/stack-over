<template>
  <HeaderPage />

  <div>
    <div class="signuppage">
      <q-img src="/src/assets/image/logo-stack.png" class="logo-stack" />

      <h4 class="signup-title">Create your account</h4>
      Username
      <q-input standout="bg-teal text-white" v-model="username" label="UserName" class="user-btn" />
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
      <div class="btn-signup1">
        <q-btn style="background: blue; color: white" label="Sign UP" class="btn-signup" @click="handleregister" />
      </div>
    </div>
  </div>
</template>
<script setup>
import HeaderPage from 'src/components/HeaderPage.vue'
import { ref } from 'vue'
const username = ref('')
const email = ref('')
const password = ref('')
const isPwd = ref(true)
const error = ref('')
const token = ref('')

const handleregister = async () => {
  error.value = ''
  try {
const query = `
  mutation register($input: RegisterInput!) {
    register(input: $input) {
      token
      user {
        id
        username
        email
      }
    }
  }
`

    const variables = {
      input: {
        username : username.value,
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
      token.value = result.data.register.token
      console.log('User:', result.data.register.user)
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
.signuppage {
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
.btn-signup {
  width: 300px;
}
.btn-signup1 {
  padding-top: 10px;
}
.signup-title {
  text-align: center;
}
</style>
