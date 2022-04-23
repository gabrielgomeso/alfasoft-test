import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddContactView from '../views/AddContactView.vue'
import EditContactView from '../views/EditContactView.vue'
import ContactDetailsView from '../views/ContactDetailsView.vue'

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
  {
    path: '/details/:id',
    name: 'contactDetails',
    component: ContactDetailsView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
