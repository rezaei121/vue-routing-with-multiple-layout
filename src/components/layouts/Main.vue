<template>
  <div id="app">
  <div class="header">Main Layout Header</div>
<!--    <router-view/>-->
    <slot></slot>
    <div class="footer">Main Layout Footer</div>
  </div>
</template>

<script>
export default {
  name: 'Main'
}
</script>
