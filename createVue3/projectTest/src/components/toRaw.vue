<template>
  <div>
    {{ state }}
    ref------------------{{ dd }}
    <button @click="btn">test</button>
  </div>
</template>
<script>
import { ref, reactive, shallowReactive, shallowRef, toRaw } from "vue";
// import {eventBus} from "../utils/eventbus.js"
export default {
  name: "App",
  created() {
    // console.log(eventBus)
  },
  setup() {
    let obj = { test: 34 };
    let state = reactive(obj);
    let ss = toRaw(obj);
    // setTimeout(() => {
    //   ss.test = 454646;
    // });
    //直接修改值，现在暂且会发生变化
    ss.test = 354511111111111;

    console.log(ss == obj);
    console.log(ss == obj);

    let objs = 33;
    let dd = ref(objs);
    let ds = toRaw(dd);

    // let state = reactive(objs);
    // let ss=toRaw(obj);
    // console.log(ss==obj);
    // let state = shallowRef({
    //   name: "wuwei",
    //   attr: {
    //     age: 38,
    //     male: {
    //       yi: "female",
    //       er: "male",
    //     },
    //   },
    // });
    function btn() {
      ss.test = 3545;
      console.log(obj);
      console.log(state);
      //   ds.value = 343535353454;
      //   console.log(ds);
    }

    return {
      state,
      btn,
      dd,
    };
  },
};
</script>
<style scoped></style>
