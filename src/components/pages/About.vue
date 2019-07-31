<template>
  <main-layout>
    <div class="hello">
      <h3>About Page.</h3>
      <div class="text">
        <h4>Your About Us page should be:</h4>
        <p>- Informative. It doesn’t always have to tell the whole story, but it should at least provide people with an idea of who and what you are.</p>
        <p>- Contain social proof, testimonials, and some personal information that viewers can relate to such as education, family, etc.</p>
        <p>- Useful and engaging.</p>
        <p>- Easy to navigate and accessible on any device.</p>
      </div>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/Inner.vue'
export default {
  name: 'About',
  components: {
    MainLayout
  }
}
</script>
