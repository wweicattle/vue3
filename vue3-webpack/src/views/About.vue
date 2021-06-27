<template>
  <div class="about">
    <div>
      引入 的组件：
      <span>你的姓名是：{{ name }}</span>
    </div>
    <el-scrollbar height="400px">
      <p class="item" v-for="(item,index) in 20" :key="index">{{ item }}</p>
    </el-scrollbar>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from "vue"
interface student {
  name: string,
  age: number,
}
export default {
  data() {
    return {
      name: "wuwei",
      zhangyi: {
        name: "wsa",
        age: 212
      } as student
    }
  },
  components: {

  },
  setup() {
    const arr = [1,2,3,45,6,6];
  }
}
</script>
