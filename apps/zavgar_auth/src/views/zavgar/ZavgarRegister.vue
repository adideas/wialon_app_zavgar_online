<template>
  <div>
    <vs-button @click="openRegister">
      Регистрация в завгар
    </vs-button>
  </div>
</template>

<script>
export default {
  name: 'ZavgarRegister',
  computed: {
    url() {
      const query = {
        lang: 'ru',
        partner: 'wialon',
        token: 'wialon'
      }
      return 'https://web.zavgar.online/register?' + Object.keys(query).map(key => key + '=' + query[key]).join('&')
    }
  },
  methods: {
    openRegister() {
      const a = document.createElement('a')
      a.href = this.url
      a.target = '_blank'
      a.dispatchEvent(new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
      }))
    }
  }
}
</script>

<style scoped>

</style>
