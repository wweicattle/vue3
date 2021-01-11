<template>
  <div class="logic-contain">{{ x }}{{ y }}</div>
</template>

<script>
export default {
  data() {
    return {
      x: null,
      y: null,
    };
  },
  created() {},
  mounted() {
    window.addEventListener("mousemove", (e) => {
      this.x = e.pageX;
      this.x = e.pageY;
    });
  },
  methods: {},
};
</script>

<style>
.logic-contain {
  height: 300px;
  border: 1px solid #f40;
}
</style>
