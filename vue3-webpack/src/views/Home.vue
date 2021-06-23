<template>
  <div class="home">
    <div>
      {{ name.name }}
      {{ plusOne }}
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
      <el-button type="primary" @click="df">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, computed, watch, watchEffect } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    mainBtn() {
      console.log(323)
    }
  },
  setup(props) {
    let name = reactive({ name: 32 });
    const count = ref(1)
    const plusOne = computed(() => count.value + 1)
    watchEffect(() =>{
      console.log(2222222)
      console.log(count.value)
    });
    watch(() => count.value, () => {
      console.log(1111111)
      console.log(count.value)
    })
   
     let tableData = reactive([{
      date: '2016-05-02',
      name: 2,
      address: '上海市普陀区金沙江路 1518 弄'
    }, {
      date: '2016-05-04',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1517 弄'
    }, {
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1519 弄'
    }, {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄'
    }]);
    function df() {
      count.value = ++count.value;
    }
    return {
      plusOne,
      tableData,
      name,
      df
    }
  }
})
</script>
