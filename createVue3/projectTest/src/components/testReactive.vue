<template>
  <div>
    <to-raws></to-raws>
    <ul>
      {{
        a
      }}
      <li>{{ state.name }}</li>
      <li>{{ state.attr }}</li>
      <li>{{ state.attr.male.yi }}</li>
      <li>{{ state.attr.male.er }}</li>
    </ul>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aut sed assumenda
    perferendis dolores voluptas quae? Labore nulla porro modi illum aliquid, ratione
    eligendi sapiente quae rerum facilis aliquam
    <button @click="df">button clik</button>
    <button @click="edit">edit clik</button>
  </div>
</template>
<script>
import { ref, reactive, shallowReactive, shallowRef, toRaw } from "vue";
import toRaws from "./toRaw.vue"
export default {
  name: "App",
  setup() {
    let obj = { df: 34 };
    let a = reactive(obj);
    // let f = toRaw(a);
    // a.sd=234353045;
    // a.value=2000000;
    let state = shallowRef({
      name: "wuwei",
      attr: {
        age: 38,
        male: {
          yi: "female",
          er: "male",
        },
      },
    });
    function df() {
      obj.df = 34534545;
      console.log( obj);
      //   let a = state;
      console.log(state);
      state.value = {
        name: "wuwei",
        attr: {
          age: 38,
          male: {
            yi: "324",
            er: "43",
          },
        },
      };
      //   let b = state.attr;
      //   let d = state.attr.male.yi;
      console.log(state.value.attr.age);
      //   console.log(b);
      //   console.log(d);
    }
    function edit() {}
    return {
      state,
      df,
      edit,
      a,
    };
  },
  components:{
    toRaws
  }
};
</script>
<style scoped></style>
