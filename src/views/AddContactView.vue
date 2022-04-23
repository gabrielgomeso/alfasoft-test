<template>
  <h1>This is an add page</h1>

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
import { createContact } from '../firebase.js';
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
  methods: {
    async submitForm() {
      await createContact({ ...this.form });
      console.log(this.form);
    }
  }
}
</script>

<style>
</style>