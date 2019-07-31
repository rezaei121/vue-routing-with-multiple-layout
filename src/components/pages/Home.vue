<template>
  <main-layout>
    <div class="hello">
      <div class="menu">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
      <h1>[ {{ msg }} ]</h1>
      <div class="text">
        <p>Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.</p>
        <p>If you’d like to learn more about Vue before diving in, we created a video walking through the core principles and a sample project.</p>
        <p>If you are an experienced frontend developer and want to know how Vue compares to other libraries/frameworks, check out the Comparison with Other Frameworks.</p>
      </div>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue'
export default {
  name: 'Home',
  components: {
    MainLayout
  },
  data () {
    return {
      msg: 'Welcome to Vue.js App'
    }
  }
}
</script>
