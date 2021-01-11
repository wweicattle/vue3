<template>
  <div>
    {{ state }}
    <button @click="btn">btn-raw</button>
  </div>
</template>
<script>
import { ref, reactive, toRefs, onMounted } from "vue";
function df() {
  console.log("---------------------------");
  let state = ref(22222);
  console.log(state);
  onMounted(() => {
    console.log(3444444444444444444);
  });
}
// df();
// df();
// import {eventBus} from "../utils/eventbus.js"

export default {
  name: "App",
  created() {
    console.log(this.state.test.value);
    console.log("=====================================");
    // console.log(eventBus)
  },

  setup() {
    let obj = { test: "maekraw", sd: 54545 };
    let state = toRefs(obj);
    function btn() {
      state.test.value = 343;
      state.sd.value = 54511111;
      console.log(obj, state);
    }
    let f=df();
    return {
      state,
      btn,
      // f
    };
  },
};
</script>
<style scoped></style>
