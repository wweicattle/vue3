<template>
  <div>
    <Home class="sas" style="color:red"/>
    <component :is="currentTabComponent"></component>
    <router-link to="/">home</router-link>
    <router-link to="/about">about</router-link>
    <router-view></router-view>
    <About ref="about" />
    <slot name="testslot">testslot</slot>
    <div>------------------------------</div>
    <Ref />
  </div>
</template>
v-base  
<script lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import About from "./views/About.vue";
import Home from "./views/Home.vue";
import Ref from "./views/REF.vue";
export default {
  name: "App",
  components: {
    HelloWorld,
    About,
    Ref,
    Home
  },
  data() {
    return {
      opacity: 1,
      currentTabComponent: "HelloWorld"
    };
  },
  mounted() {
    setTimeout(() => {
      console.log(22);
    }, 3000);
    // console.log(this.$scopedSlots);
    // console.log(this.$refs.about);
  }
};
</script>

<style scoped>
h1 {
  color: red;
  opacity:  v-bind(opacitys);
}
.home{
  font-size: 50px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
