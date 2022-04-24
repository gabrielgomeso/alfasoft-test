<template>
  <div class="contact">
    <span class="name">
      {{ name }}
    </span> 
    
    <router-link :to="`/details/${id}`">Contact details</router-link> - <router-link :to="`/edit/${id}`">Edit contact</router-link> - <button @click="confirmDestroy()">Delete contact</button>
    
    <Transition name="slide-fade">
      <p v-if="toggleConfirmation">Are you sure you want to delete this contact? <button @click="destroyContact(id)">Yes</button> <button @click="confirmDestroy()">Cancel</button></p>
    </Transition >  
  </div>
</template>

<script>
  import  { deleteContact } from '@/firebase';

  export default {
    props: ['id', 'name', 'number', 'email'],
    data() {
      return {
        toggleConfirmation: false,
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

<style lang="scss" scoped>
.contact {
  padding: .5em;

  .name {
    display: block;
    min-width: 100px;
  }
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>