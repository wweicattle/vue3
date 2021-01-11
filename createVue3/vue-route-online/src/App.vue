<template>
  <div id="nav">
    <ul>
      <!-- <li><a>menu1</a></li>
      <li><a>menu2</a></li>
      <li><a>menu3</a></li> -->
      <!-- <template > -->
        <router-link to="/about">abount</router-link>

      <!-- <li v-for="(val, index) in routes" :key="index">
        {{ val.path }}
        <router-link :to="val.path">{{ val.name }}</router-link>
      </li> -->
      <!-- </template> -->
      <div>------------------------------</div>
      <router-view />
    </ul>
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
