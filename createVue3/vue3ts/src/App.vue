<template>
  <div id="nav">
    <button type="" @click="btn">click btn</button>
    {{ fd}}-{{name}}-{{age}}---{{ count }}
    <button type="" @click="AddCountBtn">click addcount</button>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <HelloWorld></HelloWorld>
  </div>
  <!-- <div>dsfsdf</div> -->
</template>
<script>
import { defineComponent, ref, toRefs } from "vue";
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
// 哪里创建新的子组件呢
defineComponent(function HelloWorld() {
  const count = ref(0);
  return { count };
});
export default defineComponent({
  data() {
    return {
      count: 200,
    };
  },
  setup() {
    const obj = { fd: 54522,name:"wiweo",age:223 };
    const state = toRefs(obj);
    console.log(state);
    function btn() {
      state.fd.value=1000;
      console.log(state);
    }
    return {
      ...state,
      btn
    };
  },
});
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
