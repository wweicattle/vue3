<template>
  <div class="about">
    <div class="left" ref="leftContain">
      <left-area
        :stateStr="stateStr"
        ref="leftRef"
        @adudge="adudge"
        class="left-area"
        :stateTag="stateTag"
        @clickDetail="clickDetailBtn"
        @cancelDelete="cancelDeleteBtn"
      ></left-area>
      <div class="left-expand-content">
        <span @click="changeAreaBtn('reduce')">缩小</span>
        <span @click="changeAreaBtn('expand')">放大</span>
      </div>
    </div>
    <div class="right">
      <right-area :detailData="detailData"></right-area>
    </div>
  </div>
</template>
<script lang="ts">
import leftArea from "../components/LeftArea.vue";
import rightArea from "../components/RightArea.vue";

export default {
  name: "HomePage",
  props: {},
  data() {
    return {
      stateTag: 0,
      stateStr: null,
      detailData: { width: 0, height: 0, top: 0, left: 0 },
    };
  },
  created() {
    // this.$nextTick(90=>{
    //   let leftContaindom = this.$refs.leftContain;
    // let initWidth1 = Number(
    //   getComputedStyle(leftContaindom).width.split("p")[0]
    // );
    // let initHeiht1 = Number(
    //   getComputedStyle(leftContaindom).height.split("p")[0]
    // );
    // let dom = this.$refs.leftRef.$el;
    // dom.style.width=(initWidth1/3).toFixed(0)+"px"
    // })
  },
  mounted() {
    this.betterSize();
  },
  components: {
    leftArea,
    rightArea,
  },
  methods: {
    cancelDeleteBtn(){
    },
    clickDetailBtn(obj) {
      this.detailData = obj;
    },
    adudge(obj) {
      this.betterSize();
    },
    // 比较宽高之后居中
    betterSize() {
      let dom = this.$refs.leftRef.$el;
      let initWidth = Number(getComputedStyle(dom).width.split("p")[0]);
      let initHeiht = Number(getComputedStyle(dom).height.split("p")[0]);
      let leftContaindom = this.$refs.leftContain;
      let initWidth1 = Number(
        getComputedStyle(leftContaindom).width.split("p")[0]
      );
      let initHeiht1 = Number(
        getComputedStyle(leftContaindom).height.split("p")[0]
      );
      console.log(initWidth1, initWidth1, initWidth, initHeiht);

      if (initHeiht <= initHeiht1) {
        console.log(22);
        dom.style.top = (initHeiht1 - initHeiht) / 2 + "px";
        dom.style.left = (initWidth1 - initWidth) / 2 + "px";
      } else {
        console.log("dayuneirong");
        console.log(initHeiht, initHeiht1);
        dom.style.top = -(initHeiht - initHeiht1) / 2 + "px";
        console.log(dom.style.top);
        dom.style.left = (initWidth1 - initWidth) / 2 + "px";
        console.log(dom.style.left);
      }
    },
    // expandAreaBtn() {
    //   console.log(this.widthclick);
    //   this.widthclick = this.widthclick + 1;
    // },
    // reduceAreaBtn() {
    //   console.log(this.heightchange);
    //   this.heightchange = this.heightchange + 1;
    // },
    changeAreaBtn(stateStr) {
      // thi
      this.stateTag = ++this.stateTag;
      this.stateStr = stateStr;
    },
  },
};
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
  border-radius: 5px;
  overflow: hidden;
  // overflow-x: hidden;
  // overflow-y:scroll;
  flex: 1;
  box-shadow: 0 0 2px #aaa;
  background-color: #fff;
  // border: 1px solid red;
  position: relative;
  .left-expand-content {
    position: absolute;
    bottom: 0;
    right: 0;
    padding-right: 10px;
    cursor: pointer;
  }
  .left-area {
    width: 400px;
    height: 600px;
  }
}

.right {
  border-radius: 5px;
  margin-left: 20px;
  width: 200px;
  box-shadow: 0 0 2px #aaa;
  background-color: #fff;
  // border: 1px solid #f40;
  height: 60%;
}
</style>

