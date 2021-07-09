<template>
    <div @click="btn">
        我是的二ee4个组件
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    created() {

    },
    mounted() {

    },
    methods: {
        btn(){
            console.log("btn");
        }
    }
};
</script>

<style scoped>
div{
    font-size:20px
}
</style>
