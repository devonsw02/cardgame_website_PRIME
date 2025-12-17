// src/main.js
import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'

// Import your views
import HomePage from '@/views/HomePage.vue'
import ContactMe from '@/views/ContactMe.vue'
import AboutMe from '@/views/AboutMe.vue'
import ShopHere from '@/views/ShopHere.vue'
import NewsHere from '@/views/NewsHere.vue'

// Create router with hash mode for GitHub Pages
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/news-here', name: 'news', component: NewsHere },
    { path: '/shop', name: 'shop-here', component: ShopHere },
    { path: '/about-me', name: 'about-me', component: AboutMe },
    { path: '/contact-me', name: 'contact-me', component: ContactMe },
  ]
})

// Create and mount Vue app
createApp(App).use(router).mount('#app')
