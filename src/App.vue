<template>
  <div id="app">
    <NavBar />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style>
#app {
  display: flex;
  flex-flow: column;
  height: 100vh;
}
</style>
