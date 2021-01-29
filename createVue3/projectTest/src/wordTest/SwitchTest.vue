<template>
  <div>
    <!-- --------------------------------------
    <slot name="wuwei"> 这是插槽为第一个wuwei </slot>
    <slot name="test"> test </slot>
    <slot name="default"> 这是插槽为default </slot> -->
  </div>
</template>

<script>
export default {
  data() {
    return { name: "wuwei" };
  },
  props: ["case"],
  setup(props, obj) {
    console.log("test-----------------------");
    console.log(obj.slots["wuwei"]());
    return () => {
      if (obj.slots[props.case]) {
        return obj.slots[props.case]();
      } else {
        return obj.slots["default"]();
      }
    };
  },
};
</script>

<style scoped>
</style>
