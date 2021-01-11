<template>
  <div class="right-area">
    <div class="content-detail">
      <span class="title"> Positon</span>
      <div class="text-content">
        <div class="">
          <span>top</span>
          <input :placeholder="detailData.top" />
        </div>
        <div>
          <span>left</span>
          <input :placeholder="detailData.left" />
        </div>
      </div>
    </div>
    <div class="content-detail">
      <span class="title"> Size</span>
      <div class="text-content">
        <div>
          <span>width</span>
          <input :placeholder="detailData.width" />
        </div>
        <div>
          <span>height</span>
          <input :placeholder="detailData.height" />
        </div>
      </div>
    </div>
    <div class="operate-icon">
      <img src="../assets/addicon.png" alt="" />
      <img :src="srcDelete" alt="" @click="deleteModelBtn" />
    </div>
  </div>
</template>

<script>
let img = require("../assets/delete.png");
let initimg = require("../assets/delete1.png");
export default {
  name: "rightArea",
  data() {
    return {
      srcDelete: initimg,
    };
  },
  props: {
    msg: String,
    detailData: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  watch: {
    detailData(obj) {
      obj.isopen == true ? (this.srcDelete = img) : (this.srcDelete = initimg);
    },
  },
  methods: {
    deleteModelBtn() {
      console.log(this.srcDelete);
      if (this.srcDelete == img) {
        console.log(this.detailData.indexState);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.right-area {
  padding: 30px 10px 0;
  text-align: left;
  position: relative;
  height: 100%;
  box-sizing: border-box;
  .title {
    font-weight: 600;
  }
  .content-detail {
    padding-bottom: 26px;
    .text-content {
      margin-top: 10px;
      display: flex;
      font-size: 11px;
      color: #bbb;
      font-weight: 300;
      input {
        width: 70px;
        display: inline-block;
        border: 1px solid #bfbfca;
        margin-top: 2px;
        height: 16px;
        margin: 2px 14px 0 4px;
      }
    }
  }
  .operate-icon {
    text-align: center;
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
    img {
      padding-left: 15px;
      width: 20px;
    }
  }
}
</style>
