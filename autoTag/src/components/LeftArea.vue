<template>
  <div class="draggable-container" ref="parentRef" @mousedown="mouseDownBtn">
    <img src="./../assets/test.jpg" alt="" />
    <template v-for="(val, index) in addGraCoordinate">
      <VueDragResize
        :key="index"
        :w="val.width"
        :h="val.height"
        :x="val.left"
        :y="val.top"
        v-on:resizing="resize"
        v-on:dragging="resize"
        :parentLimitation="true"
        style="background: orange; border-radius: 50%"
        @click.native="clickModelBtn(index)"
        @deactivated="onDeactivated"
        :isResizable="false"
      >
      </VueDragResize>
    </template>
  </div>
</template>

<script>
import VueDragResize from "vue-drag-resize";
export default {
  name: "leftArea",
  props: {
    stateStr: {
      type: String,
      default: null,
    },
    stateTag: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      addGraCoordinate: [
        { top: 60, left: 60, width: 30, height: 30 },
        { top: 100, left: 130, width: 10, height: 10 },
      ],
    };
  },
  created() {},
  components: {
    // ResizeAble,
    VueDragResize,
  },
  methods: {
    onDeactivated() {
      console.log(2222222);
      this.$emit("clickDetail", {
        width: 0,
        top: 0,
        left: 0,
        height: 0,
        isopen: false,
      });
    },
    clickModelBtn(e) {
      let { width, top, left, height } = this.addGraCoordinate[e];
      this.$emit("clickDetail", {
        width,
        top,
        left,
        height,
        nowIndex:e,
        isopen: true,
      });
    },
    mouseUpBtn(e) {
      console.log(e);
    },
    mouseDownBtn(e) {
      console.log(e);
    },
    judgSize() {},
    resize(newRect) {
      this.width = newRect.width;
      this.height = newRect.height;
      this.top = newRect.top;
      this.left = newRect.left;
    },
  },
  watch: {
    // 放大或者缩小
    stateTag(newVal) {
      let beforeWidth = Number(
        getComputedStyle(this.$refs.parentRef).width.split("p")[0]
      );
      let beforeHeihgt = Number(
        getComputedStyle(this.$refs.parentRef).height.split("p")[0]
      );
      // 判断放大还是 缩小
      let nowWidth =
        this.stateStr == "expand" ? beforeWidth + 20 : beforeWidth - 20;
      let nowHeight = (nowWidth * beforeHeihgt) / beforeWidth.toFixed(2);
      console.log(nowHeight, nowWidth);
      if (nowWidth <= 180 || nowWidth >= 700) return;
      this.$refs.parentRef.style.width = nowWidth + "px";
      this.$refs.parentRef.style.height = nowHeight + "px";
      this.$emit("adudge");
      // 对里面的坐标进行等比例大小变化
      if (this.addGraCoordinate.length) {
        this.addGraCoordinate.forEach((val) => {
          console.log(val);
          let { left, top } = val;
          val.left = (left * nowWidth) / beforeWidth;
          val.top = (top * nowHeight) / beforeHeihgt;
        });
      }
    },
  },
};
</script>

<style scoped lang="scss">
.draggable-container {
  overflow: hidden;
  // background: url("../assets/test.jpg");
  img {
    width: 100%;
  }
  // width: 400px;
  // height: 600px;
  border: 1px solid rgb(211, 186, 186);
  background-size: cover;
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