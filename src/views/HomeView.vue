<template>
  <div class="home">
    <ul>
      <li v-for="contact in contacts" :key="contact.id">
        {{ contact.contactName }} - {{ contact.id }}

        <ul>
          <li>
            <router-link :to="`/edit/${contact.id}`">Edit contact</router-link>
          </li>
          <li>
            <button @click="destroyContact(contact.id)">Delete contact</button>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { useLoadContacts, deleteContact } from '@/firebase'

export default {
  name: 'HomeView',
  data() {
    return {
      contacts: useLoadContacts(),
    }
  },
  methods: {
    destroyContact(id) {
      deleteContact(id)
    }
  },
}
</script>
