<template>
  <div>
    <a @click="$router.push({ name: 'HelloWord' })"> test</a>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>

</style>
