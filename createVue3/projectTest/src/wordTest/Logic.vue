<template>
  <div class="sds" :sd="334">
      <slot></slot>
    {{ name }}<button @click="show">click btn</button>
    <div class="logic-contain">{{ x }}----{{ y }}</div>
    <div class="logic-contain">{{ xx }}----{{ yy }}</div>
  </div>
</template>

<script>
import { ref, onMounted, toRef } from "vue";
function mouseTrack({ xxs: xx, yys: yy }) {
  onMounted(() => {
    // window.addEventListener("mousemove", (e) => {
    //   console.log(e);
    //   xx.value = e.pageX;
    //   yy.value = e.pageY;
    //   console.log(xx.value, yy.value);
    // });
  });
  return { xx, yy };
}
export default {
  data() {
    return {
      x: null,
      y: null,
      num: 100,
    };
  },
  props: {
    name: {
      type: Number,
      default: 1,
    },
  },
  created() {},
  mounted() {
    // window.addEventListener("mousemove", (e) => {
    //   this.x = e.pageX;
    //   this.y = e.pageY;
    // });
  },
  methods: {
    show() {
    //   console.log(this);
    // this.num=++this.num
    },
  },
  setup(props) {
    console.log(props);
    const title = toRef(props, "name");
    title.name = "wukai";
    console.log(props.name);
    console.log(title);
    let xxs = ref(0);
    let yys = ref(0);
    var { xx, yy } = mouseTrack({ xxs, yys });
    return { xx, yy };
  },
};
</script>

<style>
.logic-contain {
  height: 300px;
  border: 1px solid #f40;
}
</style>
