<template>
  <div class="test">
    {{ testdata }}
    父组件传给子组件的值{{pro}}
    <button type="" @click="testdata = 1000">click</button>
  </div>
</template>

<script>
export default {
  props: {
    pro: {
      type: Number,
      defualt: "",
    },
  },
  data() {
    return {
      testdata: "wuwei",
    };
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style >
.test {
  width: 100px;
  height: 200px;
  border: 1px solid red;
}
</style>
