<template>
  <form @submit.prevent="submitForm">
    <label for="name">Contact name:</label>
    <input v-model="formData.contactName" type="text" name="name">

    <label for="number">Contact number:</label>
    <input v-model="formData.contactNumber" type="text" name="number">

    <label for="email">Contact e-mail:</label>
    <input v-model="formData.contactEmail" type="text" name="email">

    <!-- <label for="photo">Contact photo:</label>
    <input v-model="form.contactPhoto" type="file" name="photo"> -->

    <button type="submit">Create Contact</button>
  </form>
</template>

<script>
  export default{
    props: ['form-data'],
  }
</script>

<style></style>