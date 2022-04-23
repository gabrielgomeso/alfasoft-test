import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddContactView from '../views/AddContactView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/add',
    name: 'newContact',
    component: AddContactView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
