<template>
  <div>
    {{ state }}
    <button @click="btn">add ++</button>
    <ul>
      <template v-for="(val, index) in gg">
        <li :key="index">{{ val.name }}-{{ val.age }}</li>
      </template>
    </ul>
  </div>
</template>
<script>
import { ref, reactive, customRef, triggerRef } from "vue";
function myRef(value) {
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        console.log("get++++");
        fetch("../public/data.json")
          .then((da) => {
            // da.json().then(da=>{
            //   console.log(da);
            // });
            return da.json();
          })
          .then((da) => {
            console.log(da);
            // trigger();
            value = da;
          })
          .catch((re) => {
            console.log(re);
          });

        return value;
      },
      set(val) {
        trigger();
        console.log("set++++++");
        value = val;
      },
    };
  });
}

export default {
  name: "App",
  created() {},
  setup() {
    // let data = ref([]);
    // fetch("../public/data.json")
    //   .then((da) => {
    //     // da.json().then(da=>{
    //     //   console.log(da);
    //     // });
    //     return da.json();
    //   })
    //   .then((da) => {
    //     console.log(da);
    //     data.value = da;
    //   })
    //   .catch((re) => {
    //     console.log(re);
    //   });
    // let state = myRef(34);
    // console.log(state);
    // function btn() {
    //   state.value += 1;
    // }
    let gg=myRef();
    return {
      gg
      // state,
      // btn,
      // data,
    };
  },
};
</script>
<style scoped></style>
