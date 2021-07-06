<template>
  <div class="home">
    <div ref="successbutton">
      <div>---------{{ fdf }}</div>
      <div>name vlaues- {{ as }}</div>
      <!-- {{ name.name }} -->
      {{ plusOne }}{{ plusOne }}
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
      <el-button type="primary" @click="df">主要按钮</el-button>
      <el-button type="success" @click="countChange">成功按钮</el-button>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, ipsam.
      </h1>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, computed, watch, watchEffect, onMounted } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import { log } from 'util';
interface s { sa: number, ada: string }

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
  },
  mounted() {
    console.log("----------");
    console.log(this.$refs.successbutton)
  },
  methods: {
    mainBtn() {
      console.log(323)
    }
  },
  props: {
    as: {
      type: Object,
      default: {
        sa: 323, ada: "sas"
      } as s
    }
  },
  setup(props) {
    let name = reactive({ name: 32 });
    const opacitys = ref(1);
    const count = ref(1)
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

    let g = tableData[0].name;

    const plusOne = computed(() => Number(tableData[0].name) + 1)
    const plusOnes = computed(() => Number(tableData[0].name) + 1)

    watchEffect(() => {
      console.log("watceffect");
      // console.log(tableData)
      // console.log(count.value)
    });
    watch([() => tableData, () => count.value], () => {
      console.log("tableData发生改变！")
      console.log(tableData);
    }, {
      deep: true, immediate: true
    })
    let yan = 3232;
    function df() {
      tableData[0].name = ++yan;
    }
    function countChange() {
      console.log("countCahnge!!!");
      count.value=10000000;
    }
    let fdf;

    onMounted(() => {
      setInterval(() => {
        opacitys.value >= 1 && (opacitys.value = 0)
        opacitys.value += 0.2
      }, 300)
    })

    return {
      plusOne,
      plusOnes,
      tableData,
      name,
      fdf,
      opacitys,
      df,
      countChange
    }
  }
  ,expose: [ 'opacitys' ]
})
</script>
<style >
h1 {
  color: rgb(65, 184, 131);
  opacity:  v-bind(opacitys);
}
</style>
