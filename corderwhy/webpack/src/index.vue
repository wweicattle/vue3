<template>
    <div>
        template{{ss}}
        <Test  />
    </div>
    
</template>

<script>
import Test  from  "./other.vue"
export default {
    data() {
        return {
            ss:"3434"
        }
    },
    components:{
        Test
    },
    created() {
        console.log("212");
    },
    mounted() {

    },
    methods: {

    }
};
</script>

<style scoped>

</style>
