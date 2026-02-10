import { createRouter, createWebHistory } from 'vue-router';

// Import all components
import Home from '../components/Home.vue';
import notionfree from '../components/notionfree.vue';
import LoginSectionpage from '../components/LoginSectionpage.vue';
import FooterPage from '../components/FooterPage.vue';
import DashboardPage from '../components/DashboardPage.vue';
import sidebarHomePage from '../components/sidebarHomePage.vue';
import WelcomePage from '../components/WelcomePage.vue';
import mettingPage from '../components/mettingPage.vue';
// Combine all routes
const routes = [
  { path: '/', component: Home },
  { path: '/notionfree', component: notionfree },
  { path: '/LoginSectionpage', component: LoginSectionpage },
  { path: '/FooterPage', component: FooterPage },
  
  {
    path: '/DashboardPage',  // Parent Route
    component: DashboardPage,
    children: [  
      { path: 'sidebarHomePage', component: sidebarHomePage },
      { path: 'WelcomePage', component: WelcomePage },
      { path: 'mettingPage', component: mettingPage }
    ]
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
