<template>
  <div>
    direactds
    <input type="text"  v-model="ss" v-focusa />
  </div>
</template>

<script>
import { createApp,toRaw } from "vue";
export default {
  data() {
    return {
        ss:343
    };
  },
  created() {
    console.dir(createApp);
  },
  mounted() {},
  methods: {},
  directives: {
    focusa: {
      // 指令的定义
      inserted: function (el) {
        el.focus();
      },
    },
  },
};
</script>

<style scoped>
</style>
