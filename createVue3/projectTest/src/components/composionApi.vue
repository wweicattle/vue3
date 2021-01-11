<template>
  <div>
    <test-reactive v-model="sd"></test-reactive>

    <option-com></option-com>
    <div>
      <input type="text" v-model="stu.name" /><input
        type="text"
        v-model="stu.age"
      /><input type="text" v-model="stu.male" />
      <button @click="additemBtn">add record</button>
    </div>
    <ul>
      <!-- <template > -->
        <li :key="index" v-for="(val, index) in arrs">{{val.name}}-{{ val.age }}-{{ val.male }}</li>
      <!-- </template> -->
    </ul>
    <div>
      -------------------------------------------------------------------------------
    </div>

    ------------------------
    <button @click="add">btnAwdasddd</button>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import add from "./../js/add"
import OptionCom from "./optionAndComposition.vue"
import testReactive from "./testReactive.vue"

function df() {
  let arrs = reactive([
    {
      name: "yi",
      age: 1,
      male: "malea",
    },
    {
      name: "er",
      age: 2,
      male: "malae",
    },
    {
      name: "san",
      age: 3,
      male: "maale",
    },
  ]);
  arrs[0].name=2344;
  return { arrs };
}

// ref只能监听简单类型的变化，不能坚挺复杂类型的变化。（obj，arr）
// reactice 复杂类型
export default {
  name: "app",
  mounted() {
    console.log(43432);
  },
  methods: {},
  //   组合API
  //   在 组件中定义的变量和方法，要想在外界使用，需要return出去
  setup() {
    let { arrs } = df();
    let { additemBtn, stu } = add(arrs);
    let sd=100;
    return { arrs, additemBtn, stu,sd };
  },
  components:{
    OptionCom,
    testReactive
  }
};
</script>

<style scoped >
</style>
