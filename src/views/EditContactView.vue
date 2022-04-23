<template>
  <h1>This is an edit page</h1>
  <the-form
    :form-data="form"
  ></the-form>
</template>

<script>
import TheForm from '../components/TheForm.vue';
import { getContact, updateContact } from '../firebase.js';
import { useRoute } from 'vue-router';
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