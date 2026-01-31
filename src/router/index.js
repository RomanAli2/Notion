import { createWebHistory, createRouter } from 'vue-router'

import Home from '../components/Home.vue'
import notionfree from '../components/notionfree.vue'
import LoginSectionpage from '../components/LoginSectionpage.vue'
import FooterPage from '../components/FooterPage.vue'
const routes = [
  { path: '/', component: Home },
  { path: '/notionfree', component: notionfree },
    { path: '/LoginSectionpage', component: LoginSectionpage },
    { path: '/FooterPage', component: FooterPage },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})