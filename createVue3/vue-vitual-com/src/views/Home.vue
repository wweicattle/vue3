<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script >
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import t from "wwcattleitem"
export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
  created() {
    console.log(t.add());
    console.log(t.reduce());

  },
});
</script>
