import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Services from '../views/Services.vue'
import Projects from '../views/Projects.vue'
import Woodworks from '../views/Woodworks.vue'
import Contact from '../views/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/services', name: 'services', component: Services },
    { path: '/projects', name: 'projects', component: Projects },
    { path: '/woodworks', name: 'woodworks', component: Woodworks },
    { path: '/contact', name: 'contact', component: Contact },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
