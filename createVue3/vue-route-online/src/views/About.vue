<template>
  <div class="about">
    about page ------------
    <li v-for="(val, index) in routes" :key="index">
      {{ val }}
      <router-link :to="val.path">{{ val.name }}</router-link>
    </li>
    下面是一个菜单组件空间
    <div>
      <router-view />
    </div>
  </div>
</template>
<script>
import store from "../store";
import router from "../router";
const menu1 = () => import(/* webpackChunkName: "about" */ "./menu1.vue");
const menu2 = () => import(/* webpackChunkName: "about" */ "./menu2.vue");
const menu3 = () => import(/* webpackChunkName: "about" */ "./menu3.vue");
const menu4 = () => import(/* webpackChunkName: "about" */ "./menu4.vue");
// fetch("../utils/data.json")
//   .then((da) => {
//     return da.json();
//   })
//   .then((da) => {
//     console.log(da);
//   });
export default {
  data() {
    return {
      routes: [],
    };
  },
  methods: {
    changeMenu() {
      // console.log("changeMenu");
      // console.log(this);
      // this.$router.push("/menu1");
    },
  },
  mounted() {
    let r;
    console.log(router);
    this.$nextTick(() => {
      console.log(2222222222);
      console.log(store.getters.newRoutes);
      this.routes = store.getters.newRoutes;
      console.log(Array.isArray(this.routes));
      // router.addRoutes();
      console.log(this.routes);
    });
  },
};
</script>
