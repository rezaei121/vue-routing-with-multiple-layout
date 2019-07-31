<template>
  <div id="app">
    <div class="header">Inner Layout Header</div>
    <div class="menu">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
<!--    <router-view/>-->
    <slot></slot>
    <div class="footer">Inner Layout Footer</div>
  </div>
</template>

<script>
export default {
  name: 'Inner'
}
</script>
