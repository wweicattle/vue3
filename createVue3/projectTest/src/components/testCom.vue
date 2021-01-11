<template>
  <div>nishi{{ tests }}</div>
</template>

<script>
export default {
  props: {
    testVal: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      tests: "wuwei",
    };
  },
  created() {
    console.log(2112121212);
  },
  mounted() {},
  methods: {},
  watch: {
    testVal: {
      handler(val) {
        this.tests = val;
      },
    },
    immediate: true,
  },
};
</script>

<style scoped>
</style>
