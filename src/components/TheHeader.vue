<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/add">Create new contact</router-link>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  height: 10vh;
  background-color: #b08ea2;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>