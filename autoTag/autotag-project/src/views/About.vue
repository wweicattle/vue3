<template>
  <div class="about">
    <div class="left">
      <left-area></left-area>
      <div class="left-expand-content">放大 缩小</div>
    </div>
    <div class="right">
      <right-area></right-area>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import leftArea from "../components/LeftArea.vue";
import rightArea from "../components/RightArea.vue";

export default defineComponent({
  name: "HomePage",
  props: {
    msg: String,
  },
  components: {
    leftArea,
    rightArea,
  },
});
</script>
<style  scoped lang="scss">
.about {
  display: flex;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  /* padding */
}
.left {
  width: 80%;
  box-shadow: 0 0 2px #aaa;
  background-color: #fff;
  border: 1px solid red;
  position: relative;
  .left-expand-content {
      position: absolute;
      bottom: 0;
      right: 0;
      padding-right: 10px;
      cursor: pointer;
  }
}

.right {
  margin-left: 20px;
  flex: 1;
  box-shadow: 0 0 2px #aaa;
  background-color: #fff;
  border: 1px solid #f40;
}
</style>

