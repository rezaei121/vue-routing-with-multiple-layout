<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="css">
  @import './assets/css/style.css';
</style>

<script>
import i18n from './i18n'
export default {
  i18n,
  name: 'App'
}
</script>
