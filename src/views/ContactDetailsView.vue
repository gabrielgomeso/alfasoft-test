<template>
  <h1>This is the details page</h1>

  <div class="card">
    <p>
      {{ contactInfo.name }}
    </p>
    <p>
      {{ contactInfo.email }}
    </p>
    <p>
      {{ contactInfo.contact }}
    </p>
  </div>
</template>


<script>
import { useRoute } from 'vue-router';
import { getContact } from '@/firebase';

export default {
  data() {
    return {
      contactInfo: {
        name: '',
        email: '',
        contact: '',
      }
    }
  },
  computed: {
    contactId() {
      const route = useRoute();
      return route.params.id;
    }
  },
  async mounted() {
    const contact = await getContact(this.contactId);
    this.contactInfo.name = contact.contactName;
    this.contactInfo.email = contact.contactEmail;
    this.contactInfo.contact = contact.contactNumber;
  }
}
</script>

<style></style>