import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('@/components/pages/Home')
const About = () => import('@/components/pages/About')
const Contact = () => import('@/components/pages/Contact')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
