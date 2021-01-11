<template>
  <div class="draggable-container" ref="parentRef" @mousemove="mousemove">
    <!-- <resize-able 
      parentRef="parentRef"
     >
      <button class="btn">button</button>
    </resize-able> -->
  </div>
</template>

<script>
import { ref } from "vue";
// import ResizeAble from '../components/ResizeAble.vue'
export default {
  name: "leftArea",
  components: {
    // ResizeAble,
  },
};
</script>

<style scoped lang="scss">
.draggable-container {
  width: 300px;
  height: 600px;
  border: 1px solid rgb(211, 186, 186);
  background: #f40;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
  position: absolute;
  box-sizing: border-box;
}
.btn {
  width: 100px;
  height: 50px;
  border: lightblue;
  background: lightblue;
  border-radius: 8px;
}
.img {
  width: 100px;
  height: 100px;
}
</style>