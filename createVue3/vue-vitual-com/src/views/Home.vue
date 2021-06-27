<<<<<<< HEAD
<template>
  <div class="home">
    sasas
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts" >
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
  },
});
</script>
=======
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
>>>>>>> b0d926b3d001a051379f2bc8f1c3c10762390bc8
