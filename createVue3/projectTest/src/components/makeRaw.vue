<template>
  <div>
    {{ state }}
    <button @click="btn">btn-raw</button>
  </div>
</template>
<script>
import { ref, reactive, markRaw } from "vue";
// import {eventBus} from "../utils/eventbus.js"
export default {
  name: "App",
  created() {
    // console.log(eventBus)
  },
  setup() {
    let obj = { test: "maekraw" };
    let fd = markRaw(obj);
    let state = reactive(obj);

    function btn() {
      state.test = 3435;
      console.log(state);
    }

    return {
      state,
      btn
    };
  },
};
</script>
<style scoped></style>
