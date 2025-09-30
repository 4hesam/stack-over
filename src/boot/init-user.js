import { useUserStore } from 'src/stores/user'

export default () => {
  const userStore = useUserStore()
  userStore.init()
}