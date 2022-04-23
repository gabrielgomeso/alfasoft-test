import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddContactView from '../views/AddContactView.vue'
import EditContactView from '../views/EditContactView.vue'

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
  {
    path: '/edit/:id',
    name: 'editContact',
    component: EditContactView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
