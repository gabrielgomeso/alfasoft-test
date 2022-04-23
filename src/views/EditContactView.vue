<template>
  <h1>This is an edit page</h1>

  <form @submit.prevent="submitForm">
    <label for="name">Contact name:</label>
    <input v-model="form.contactName" type="text" name="name">

    <label for="number">Contact number:</label>
    <input v-model="form.contactNumber" type="text" name="number">

    <label for="email">Contact e-mail:</label>
    <input v-model="form.contactEmail" type="text" name="email">

    <!-- <label for="photo">Contact photo:</label>
    <input v-model="form.contactPhoto" type="file" name="photo"> -->

    <button type="submit">Create Contact</button>
  </form>
</template>

<script>
import { getContact, updateContact } from '../firebase.js';
import { useRoute } from 'vue-router';
export default {
  data() {
    return {
      form: {
        contactName: '',
        contactNumber: '',
        contactEmail: '',
        // contactPhoto: '',
      },
    }
  },
  computed: {
    contactId() {
      const route = useRoute();
      return route.params.id;
    }
  },
  async mounted() {
    console.log(this.contactId);
    const contact = await getContact(this.contactId);
    this.form.contactName = contact.contactName;
    this.form.contactNumber = contact.contactNumber;
    this.form.contactEmail = contact.contactEmail;
  },
  methods: {
    async submitForm() {
      await updateContact({ ...this.form });
      console.log(this.form);
    }
  }
}
</script>

<style>
</style>