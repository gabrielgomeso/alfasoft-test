<template>
  <form @submit.prevent="submitForm">
    <label for="name">Contact name:</label>
    <input v-model="form.contactName" type="text" name="name">

    <label for="number">Contact number:</label>
    <input v-model="form.contactNumber" type="text" name="number">

    <label for="email">Contact e-mail:</label>
    <input v-model="form.contactEmail" type="text" name="email">

    <!-- <label for="photo">Contact photo:</label>
    <input v-model="form.contactPhoto" type="file" name="photo"> -->

    <button @click="createNewContact" v-if="buttonType == 'newContact'" type="submit">
      Create Contact
    </button>

    <button v-else @click="editContact" type="submit">
      Edit Contact
    </button>
  </form>
</template>

<script>
  import { createContact, updateContact } from '../firebase.js';

  export default{
    props: ['form-data'],
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
      buttonType() {
        return this.$route.name;
      }
    },  
    methods: {
      async createNewContact() {
        await createContact({ ...this.form });
      },
      async editContact() {
        await updateContact({ ...this.form });
      }
    }
  }
</script>

<style></style>