<template>
  <div>
      <button @click="edit">edit</button>
      reactive---------------{{state.ssd}}
      <div>
          options-----------{{name}}
      </div>
     setup----------------- {{count}}
  </div>
</template>

<script>
import { ref,reactive } from "vue";
export default {
  name: "App",
  data() {
    return {
      name: 324,
      sd: 34,
    };
  },
  setup() {
    let count = ref(10);
   let state= reactive({
       ssd:new Date(),
       SF:{SF:43}
   })
   function edit(){
       console.log(state);
       console.log(state.SF);

       state.ssd=new Date(state.ssd.setDate(state.ssd.getDate()+1))
   }
    return { count,state ,edit};
  },
};
</script>
<style  scoped>
</style>