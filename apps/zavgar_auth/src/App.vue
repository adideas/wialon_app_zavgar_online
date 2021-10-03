<template>
  <div>
    <router-view/>
  </div>
</template>

<script>

import { getToken, loginSid } from 'wialon'
export default {
  name: 'App',
  created() {},
  mounted() {
    loginSid().then(res => {
      getToken().then(res => {
        if (res.length) {
          // был авторизован
          this.$router.push({ name: 'HelloWord' })
        } else {
          // не был авторизован
        }
      })
    })
  },
  methods: {
    test() {
      console.error(this.$store.state)
    }
  }
}
</script>

<style scoped>
</style>
