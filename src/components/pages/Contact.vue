<template>
  <main-layout>
    <div class="hello">
      <h3>Contact Page.</h3>
      <div class="text">
        <p>- The Contact Us page is one of the most visited pages on any website.</p>
        <p>- That seems like a compelling enough reason to redesign your Contacts section to better meet your users’ needs and grab their attention.</p>
        <p>- While working on this post, I came across hundreds of beautifully made websites, yet their Contact Us pages were, for the most part, disappointing.</p>
        <p>- Most Contact pages are made for show, with just an email address, phone, location, and some short boring text on a plain background.</p>
      </div>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/Inner.vue'
export default {
  name: 'Contact',
  components: {
    MainLayout
  }
}
</script>
