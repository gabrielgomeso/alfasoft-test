<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/add">Create new contact</router-link>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  align-items: center;
  background-color: #b08ea2;
  display: flex;
  height: 10vh;
  justify-content: center;
  gap: 1rem;

  a {
    font-weight: bold;
    color: black;

    &.router-link-exact-active {
      color: gray;
    }
  }
}
</style>