<template>
  <div>
    globalApi
    <MyComponent></MyComponent>
  </div>
</template>

<script >
//
import { defineComponent} from "vue";
console.log(app);
const MyComponent = defineComponent({
  data() {
    return {
      count: 1,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
  },
});
console.log(MyComponent);
export default {
  data() {
    return {};
  },
 
  created() {},
  mounted() {
    console.log(this.$slots);
  },
  methods: {},
  components: {
    MyComponent,
  },
};
</script>

<style scoped>
</style>
