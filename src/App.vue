<template>
  <the-header></the-header>
  <main>
    <router-view v-slot="{ Component }">
      <transition name="enter-fade">
        <component class="content" :is="Component" />
      </transition>
    </router-view>
  </main>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";

export default {
  components: {
    TheHeader,
  }
}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

main {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3e517a;
  width: 100vw;
  height: 90vh;
}

.content {
  min-width: 20vw;
  background-color: #b08ea2;
  padding: 3rem;
  border-radius: 10px;
}

.enter-fade-enter-active {
  transition: all 0.5s ease-out;
}

.enter-fade-leave-active {
  transition: all 0.5s ease-out;
}

.enter-fade-enter-from,
.enter-fade-leave-to {
  opacity: 0;
}
</style>
