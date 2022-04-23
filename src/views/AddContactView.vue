<template>
  <h1>This is an add page</h1>

  <the-form
    :form-data="form"
  ></the-form>
</template>

<script>
import TheForm from '../components/TheForm.vue';
import { createContact } from '../firebase.js';
export default {
  components: {
    TheForm,
  },
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