import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import ContactMe from '@/views/ContactMe.vue'
import AboutMe from '@/views/AboutMe.vue'
import ShopHere from '@/views/ShopHere.vue'
import NewsHere from '@/views/NewsHere.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/news-here',
      name: 'news',
      component: NewsHere
    },
    {
      path: '/shop',
      name: 'shop-here',
      component: ShopHere,
    },
    {
      path: '/about-me',
      name: 'about-me',
      component: AboutMe,
    },
    {
      path: '/contact-me',
      name: 'contact-me',
      component: ContactMe,
    },

  ],
})

export default router

