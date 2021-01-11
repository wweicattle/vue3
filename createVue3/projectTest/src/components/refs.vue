<template>
  <div ref="box">myref readonnly-------------- {{ state }}</div>
  
</template>

<script>
import { reactive, ref, onMounted, readonly,shallowReadonly,isReadonly } from "vue";
export default {
  data() {
    return {};
  },
  created(){
    console.log(4354545);
  },
  mounted() {
    console.log(this.$refs.box);
    console.log(3434);
  },
  // 一定记住是在beforecreate还要早
  setup() {
    console.log(onMounted);
    let box = ref(null);
    onMounted(() => {
      console.log("onmounted");
      console.log(box.value);
    });
    let state = readonly({
      name: "wuwei",
      ages: {
        age: 24,
        sa:{sa:33}
      },
    });
    state.name="wds"
    state.ages.age="wds"
    state.ages.sa.sa="wds"
      
    console.log(state);
    console.log(isReadonly(state));
    return { box, state };
  },


  methods: {},
};
</script>

<style scoped>
</style>
