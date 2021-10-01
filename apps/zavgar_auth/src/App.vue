<template>
  <div>
    <button @click="test" class="test">test333</button>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  created() {},
  methods: {
    test() {
      console.error(this.$store.state)
    }
  }
}
</script>

<style scoped>
.test {
  border: 2px solid red;
}
</style>
