<template>
  <the-header></the-header>
  <main>
    <router-view class="content" />
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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
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
  width: 70vw;
  background-color: #b08ea2;
  padding: 3rem;
  border-radius: 10px;
}
</style>
