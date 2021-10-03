<template>
  <div>
    Auth
  </div>
</template>

<script>
import { getToken, loginSid } from 'wialon'

export default {
  name: 'Auth',
  created() {
    loginSid().then(res => {
      // авторизован
      this.getTokens()
      console.error('auth')
    }).catch(() => {
      this.$router.push({ name: 'ErrorAuth' })
      this.$vs.notification({
        progress: 'auto',
        color: 'danger',
        position: 'top-center',
        title: 'Авторизация',
        text: 'Вы не авторизованы в Wialon'
      })
    })
  },
  methods: {
    getTokens() {
      getToken().then(res => {
        if (res.length) {
          this.$router.push({ name: 'ZavgarRegister' })
          // this.$router.push({ name: 'ZavgarAuth' })
        } else {
          this.$router.push({ name: 'ZavgarRegister' })
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
