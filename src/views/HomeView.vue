<template>
  <div class="home">
    <ul>
      <li v-for="contact in contacts" :key="contact.id">
        {{ contact.contactName }} - {{ contact.id }}

        <ul>
          <li>
            <router-link :to="`/details/${contact.id}`">Contact details</router-link>
          </li>
          <li>
            <router-link :to="`/edit/${contact.id}`">Edit contact</router-link>
          </li>
          <li>
            <button @click="confirmDestroy()">Delete contact</button>
          </li>
          <li v-show="toggleConfirmation">Are you sure you want to delete this contact? <button @click="destroyContact(contact.id)">Yes</button> <button @click="confirmDestroy()">Cancel</button></li>
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
      toggleConfirmation: false,
      contacts: useLoadContacts(),
    }
  },
  methods: {
    confirmDestroy() {
      this.toggleConfirmation = !this.toggleConfirmation;
    },
    destroyContact(id) {
      deleteContact(id)
    }
  },
}
</script>
