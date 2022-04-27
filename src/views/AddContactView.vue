<template>
  <div class="add-contact-page">
    <h1 class="add-contact__title">Create a new contact</h1>

    <form @submit.prevent="submitForm" class="form">
      <div class="form-control">
        <label for="name">Contact name:</label>
        <input v-model="form.contactName" type="text" name="name" class="form-control__input">
      </div>

      <div class="form-control">
        <label for="number">Contact number:</label>
        <input v-model="form.contactNumber" type="text" name="number" class="form-control__input">
      </div>
      
      <div class="form-control">
        <label for="email">Contact e-mail:</label>
        <input v-model="form.contactEmail" type="text" name="email" class="form-control__input">
      </div>
      
      <div class="form-control">
        <label for="photo">Contact photo:</label>
        <input v-on:change="form.contactPhoto" type="file" name="photo" class="form-control__input">
      </div>
      
      <div class="form-control">
        <img v-if="imagePreview != ''" :src="imagePreview">
      </div>

      <div class="form-control">
        <button @click="createNewContact" type="submit" class="form-control__submit">
          Create Contact
        </button>
      </div>
    </form>
  </div>
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
        contactPhoto: '',
      },
    }
  },
  methods: {
    async createNewContact() {
      await createContact({ ...this.form });
    },
  }
}
</script>

<style scoped lang="scss">
.add-contact-page {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  
  .add-contact__title {
    margin-bottom: 1rem;
  }

  .form {
    .form-control {
      display: flex;
      justify-content: center;
      flex-direction: column;
      max-width: 250px;

      .form-control__input {
        margin-bottom: 1rem;
      }

      .form-control__submit {
        padding: 0.5rem;
        font-size: 1.2em;
      }
    }
  }
}
</style>