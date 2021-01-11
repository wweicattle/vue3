<template>
  <div id="popup">
    <slot name=test>test lorem</slot>
    {{ local }}
    {{ count }}
    {{ nums }}<button @click="edit">edit_nums</button>
    appliction{{ message }}
    <components></components>
    当前值是：{{ num }}
    <button @click="adds">add-num</button>
    <teleport to="head" :disabled="displayVideoInline">
      <div>[piaoyi</div>
    </teleport>
  </div>

</template>

<script>
//
import { createApp, nextTick, ref, watchEffect, } from "vue";
console.log(nextTick);
export function test() {
  console.log("you win");
}
//
export default {
  data() {
    return {
      nums: 1000,
      names: 3434,
    };
  },
  renderTriggered({ key, target, type }) {
    console.log({ key, target, type });
    /* This will be logged when component is rendered for the first time:
    {
      key: "cart",
      target: {
        cart: 0
      },
      type: "get"
    }
    */
  },
  created() {
    console.log(this.$slots);
    console.log(this.foo + "-------------------------------");
  },
  mounted() {
    console.log(this);
  },
  methods: {
    edit() {
      setTimeout(() => {
        this.nums = 10;
      }, 3000);
    },
  },
  setup(props) {
    console.log(props);
    console.log(this);
    const message = ref("hello");
    const a = async (newMessage) => {
      //   message.value = newMessage
      await nextTick(() => {
        console.log("sddddddddddddd");
      });

      console.log(33333333);
    };
    a();

    let num = ref(100);
    function adds() {
      console.log(233343);
      num.value = num.value + 1;
    }

    const count = ref({ name: "wuwei" });
    watchEffect(() => {
      console.log(222222222222222222222);
      console.log(num.value);
      num.value = 10009;
      // }
      // alert(32332)
      //   // console.log(2222111111111111111111111);
      // setTimeout(() => {
      //   count.value.name = "sssssssssssss";
      // }, 5000);
    });
    setTimeout(() => {
      // count.value.name = "wukai";
      // -> logs 1
    }, 3000);
    return { count, local: window.localStorage.getItem("name"), num, adds ,message};
  },
  watch: {
    nums() {
      console.log(343545);
      console.log(this.count);
      console.log(this.nums);

      this.nums = 1323200;
    },
    count(d) {
      console.log(d);
      console.log(3434);
    },
    // names: {
    //   // handler() {
    //   //   this.names = 10012;
    //   // },
    //   immediate: true,
    // },
  },
};
</script>

<style scoped>
</style>
