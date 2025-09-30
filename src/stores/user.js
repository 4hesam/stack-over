import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const isLoggedIn = ref(false)
  const username = ref(null)
  const profileImg = ref(null)
  const token = ref(null)

  function setUser({ username: u, profileImg: img, token: t }) {
    isLoggedIn.value = true
    username.value = u
    profileImg.value = img
    token.value = t

    localStorage.setItem('user', JSON.stringify({
      username: u,
      profileImg: img,
      token: t
    }))
  }

  function logout() {
    isLoggedIn.value = false
    username.value = null
    profileImg.value = null
    token.value = null
    localStorage.removeItem('user')
  }

  function init() {
    const raw = localStorage.getItem('user')
    if (raw) {
      const p = JSON.parse(raw)
      if (p?.token) {
        isLoggedIn.value = true
        username.value = p.username
        profileImg.value = p.profileImg
        token.value = p.token
      }
    }
  }

  return { isLoggedIn, username, profileImg, token, setUser, logout, init }
})