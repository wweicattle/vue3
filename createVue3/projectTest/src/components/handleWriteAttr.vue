<template>
  <div>handlsade</div>
  <!-- <div>343434</div> -->
</template>

<script>
import { reactive, ref } from "vue";
// 手写shallowReactive，shallowRef
// 首先 你要知道的是他们的 作用是什么 ，就是 在大量的数据时候不能够都代理，只代理 第一层

function shallowRef(val) {
  // 暂时不能够进行（ts环境才允许）
  return shallowReactive(val);
}
function shallowReactive(obj1) {
  if (typeof obj1 == "object") {
    for (var attr in obj1) {
      let val = obj1[attr];
      if (typeof val == "object") {
        val = shallowReactive(val);
      }
    }
  }
  return new Proxy(obj1, {
    get(target, propkey, val, it) {
      //   console.log("get-------------------");
      return target[propkey];
    },
    set(target, propkey, val, it) {
      target[propkey] = val;

      console.log("更新 界面ui");
      return true;
    },
  });
}
// function reactive(){

// }
export default {
  data() {
    return {};
  },
  setup(props) {
    let state = ref(2);
  },
  created() {
    let obj = {
      value: {
        name: "wuwei",
        age: {
          male: "female",
          school: "high",
        },
      },
    };
    let obj1 = {
      name: "wuwei",
      age: {
        male: "female",
        school: "high",
        sad: { sa: 3434 },
      },
    };

    let state = shallowReactive(obj1);
    // 只有 一层进行拦截了
    state.name = "euer";
    console.log(state);
    // 无拦截
    state.age.school = "school";
    console.log(state);
    // state.age.sd = 54545454545;
    // console.log(state);
    //
    // let state2 = shallowRef(obj);
    // state2.name = "wewwwe";

    // console.log(state2);
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped >
</style>
