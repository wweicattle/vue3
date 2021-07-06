<template>
    <div>
        <div>name---{{ name }}</div>
        <button @click="inc">edit</button>
        <div>{{ objs }}</div>
        <button @click="wwq">{{ count }}wqwqw</button>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae repellendus accusamus numquam consequuntur deleniti ab asperiores ipsam possimus quas? Quas quae odio laborum provident impedit, amet necessitatibus tempora dolore minima.
    </div>
</template>

<script setup>
import { defineComponent, onMounted, onUnmounted } from "vue";
onUnmounted(()=>{
    console.log("onmounted")
});

onMounted(() => {
    console.log("mounted!!!!")
})
let objs = {};
// declaring a variable that compiles to a ref
ref: count = 1
reactive: objs = { sa: 22, afe: 322 }

function wwq() {
    // the variable can be used like a plain value
    count++
    console.log($count.value)
    objs.sa = ++objs.sa;
}

function inc() {
    count++
    objs.sa = ++objs.sa;
}

// access the raw ref object by prefixing with $
// console.log($count.value)
</script>


<script>
import { defineComponent, reactive, ref, computed, watch, watchEffect, onMounted } from 'vue'
import { log } from "util";
export default defineComponent({
    name: 'Home',
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
            console.log(tableData)
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
    , expose: ['opacitys']
})
</script>
<style scoped>
div {
    opacity: v-bind(opacitys);
}
</style>
