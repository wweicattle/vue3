<template>
  <div id="nav">
      <router-link to="/about">abount</router-link>
      <div>------------------------------</div>
      <router-view />
  </div>
</template>
<script>
import store from "./store";
export default {
  data() {
    return {
      routes: [],
    };
  },
  // created() {},
  mounted() {
    this.$nextTick(() => {
      console.log(2222222222);
      console.log(store.getters.newRoutes);
      this.routes = store.getters.newRoutes;
      console.log(store.getters.newRoutes);
    });
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
ul > li {
  text-align: left;
  color: red;
  font-size: 26px;
  text-decoration: underline;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
