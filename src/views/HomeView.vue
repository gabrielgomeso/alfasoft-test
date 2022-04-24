<template>
  <div class="home">
    <contact-row
      v-for="contact in contacts" 
      :key="contact.id"
      :id="contact.id"
      :name="contact.contactName"
      :number="contact.contactNumber"
      :email="contact.contactEmail"
    >
    </contact-row>
  </div>
</template>

<script>
import ContactRow from '../components/ContactRow.vue';
import { useLoadContacts } from '@/firebase'

export default {
  name: 'HomeView',
  components: {
    ContactRow,
  },
  data() {
    return {
      contacts: useLoadContacts(),
    }
  },
}
</script>
