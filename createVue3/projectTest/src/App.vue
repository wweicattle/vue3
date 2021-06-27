<<<<<<< HEAD
<template>
  <div>
    <div id="test">
      <test-repeat :pro="324"></test-repeat>
      <button type="">clickone</button>
      <test-repeat :pro="21212"></test-repeat>
      <button type="">clicktwo</button>

      <test-repeat :pro="324"></test-repeat>
    </div>
    <!-- <blog-post></blog-post> -->
    <logic :name="name"><button @click="show">lime me comeoon</button></logic>
    <blog-post>
      <template #header>
        <h1>About Me</h1>
      </template>
      <template #default>
        <p>
          Here's some page content, which will be included in $slots.default.
        </p>
        <div>
          lorem wuwei
          <div>sdsd</div>
        </div>
      </template>

      <template #footer>
        <p>Copyright 2020 Evan You</p>
      </template>
    </blog-post>

    <handle-attr v-model="sd"></handle-attr>
    <refs></refs>
    <to-ref></to-ref>
    <make-raw></make-raw>
    <to-raw></to-raw>
    <com-api></com-api>
    <!-- <button @click="sd">delete stus</button>
  <div>
   
    <heading></heading>
    <handle-attr v-model="sd"></handle-attr>
    <refs></refs>
    <to-ref></to-ref>
    <make-raw></make-raw>
    <to-raw></to-raw>
    <com-api></com-api>
    <ul>
      <li :key="index" v-for="(val, index) in stu">
        {{ val.name }}-{{ val.age }}
      </li>
      </
      ul>
      <!-- </template> -->
    <button @click="btn">delete</button>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3.0 + Vite" />

    <div style="width: 700px; background: #f40">
      <button @click="btns">点击a显示组件</button>
      <testCom :testVal="yi" key="33"></testCom>
      <button @click="btn1">点击b显示组件</button>
      <ss :testVal="yi" key="isas"></ss>
    </div>
    <div style="marginbottom: 350px; bordertop: 5px solid #f40">
      <application-setting></application-setting>
      <global-api></global-api>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import comApi from "./components/composionApi.vue";
import toRaw from "./components/toRaw.vue";
import makeRaw from "./components/makeRaw.vue";
import toRef from "./components/toRef.vue";
import Refs from "./components/refs.vue";
import HandleAttr from "./components/handleWriteAttr.vue";
import testCom from "./components/testCom.vue";
import ss from "./components/testCom.vue";
import applicationSetting from "./wordTest/applicationSetting.vue";
console.log(applicationSetting);
import { test } from "./wordTest/applicationSetting.vue";
console.log("0000000000000000000000000000");
console.log(test());
import GlobalApi from "./wordTest/GlobalApi.vue";
import logic from "./wordTest/Logic.vue";

// import LogixTest from "./wordTest/LogicRe.vue"
import { computed } from "vue";
import useMousePosition from "./utils/userMousePosition.js";
import "./utils/renderer";
// function useMousePosition(){
//   return {x:400,y:400}
// }

import testRepeat from "./components/testRepeat.vue";
export default {
  name: "App",
  data() {
    return {
      showyi: false,
      yi: null,
      stus: [],
      sd: 100,
      stu: [
        { name: "ww", age: 20 },
        { name: "ww1", age: 21 },
        { name: "ww2", age: 22 },
        { name: "ww3", age: 23 },
      ],
      name: 100,
    };
  },
  created() {


    var that = this;
    window.onclick = function () {
      console.log("window  click");
      console.log(that);
      // that.testclick();
    };
  },
  methods: {
    testclick() {
      var subwin = window.open("http://127.0.0.1:5501/tes.html");
      //父窗口http://localhost:8080/a.html向子窗口http://localhost:8081/b.html发消息，调用postMessage方法。
      subwin.postMessage("我要给你发消息了!", "http://127.0.0.1:5501");
      // window.addEventListener("message", function (e) {
      //   console.log("a.html接收到的消息:", e.data);
      // });

      function receiveMessage(event) {
        document.write("消息：",event.data);
        // 我们能相信信息的发送者吗?  (也许这个发送者和我们最初打开的不是同一个页面).
        if (event.origin !== "http://192.168.36.115:5501") return;

        // event.source 是我们通过window.open打开的弹出页面 popup
        // event.data 是 popup发送给当前页面的消息 "hi there yourself!  the secret response is: rheeeeet!"
      }
      window.addEventListener("message", receiveMessage, false);
    },
    show() {
      //   console.log(this);
      this.name = ++this.name;
      console.log(this.name);
    },
    btns() {
      this.showyi = true;
      this.yi = "yi";
    },
    btn1() {
      console.log(222);
      this.yi = "er";
    },
    sd() {
      this.stus[1] = {};
    },
    btn() {
      this.stu[2] = { name: "er", age: 100 };
      this.stu.push({ name: 323, age: 243 });
      // 进行直接引用类型进行赋值的话。。。。。
      this.stus = this.stu;
      // this.stu[4] = {
      //   name: "weew",
      //   age: 24,
      // };
    },
  },
  computed: {
    // 数据逻辑
  },
  watch: {
    // 数据逻辑
  },
  components: {
    HelloWorld,
    comApi,
    toRaw,
    makeRaw,
    toRef,
    Refs,
    HandleAttr,
    testCom,
    ss,
    applicationSetting,
    GlobalApi,
    // LogixTest,
    logic,
    testRepeat,
  },
};
</script>
<style >
#test {
  width: 400px;
  height: 300px;
}
=======
<template>
  <div>
    <input type="text" v-model="inputVal" class="text" />
    <button @click="cahngestateBtn">显示需要的插槽组件</button>
    <switch-test :case="showValSwitch">
      <template #wuweis>
        <header>对第一个插槽的扩展wuweiwuweissssssssss</header>
      </template>
      <template #wuwei>
        <header>对第一个插槽的扩展wuweiwuwei</header>
      </template>
      <!-- <template #test>
        <header>对二个插槽的扩展testtest</header>
      </template> -->
      <template #default>
        <header>对默认的插槽进行的扩展</header>
      </template>
    </switch-test>
    <!-- <component :is="SwitchTest" >

    </component> -->

    <div id="test">
      <test-repeat :pro="324"></test-repeat>
      <button type="">clickone</button>
      <test-repeat :pro="21212"></test-repeat>
      <button type="">clicktwo</button>

      <test-repeat :pro="324"></test-repeat>
    </div>
    <!-- <blog-post></blog-post> -->
    <logic :name="name"><button @click="show">lime me comeoon</button></logic>
    <blog-post>
      <template #header>
        <h1>About Me</h1>
      </template>
      <template #default>
        <p>
          Here's some page content, which will be included in $slots.default.
        </p>
        <div>
          lorem wuwei
          <div>sdsd</div>
        </div>
      </template>

      <template #footer>
        <p>Copyright 2020 Evan You</p>
      </template>
    </blog-post>

    <handle-attr v-model="sd"></handle-attr>
    <refs></refs>
    <to-ref></to-ref>
    <make-raw></make-raw>
    <to-raw></to-raw>
    <com-api></com-api>
    <!-- <button @click="sd">delete stus</button>
  <div>
   
    <heading></heading>
    <handle-attr v-model="sd"></handle-attr>
    <refs></refs>
    <to-ref></to-ref>
    <make-raw></make-raw>
    <to-raw></to-raw>
    <com-api></com-api>
    <ul>
      <li :key="index" v-for="(val, index) in stu">
        {{ val.name }}-{{ val.age }}
      </li>
      </
      ul>
      </template> -->
    <button @click="btn">delete</button>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3.0 + Vite" />

    <div style="width: 700px; background: #f40">
      <button @click="btns">点击a显示组件</button>
      <testCom :testVal="yi" key="33"></testCom>
      <button @click="btn1">点击b显示组件</button>
      <ss :testVal="yi" key="isas"></ss>
    </div>
    <div style="marginbottom: 350px; bordertop: 5px solid #f40">
      <application-setting></application-setting>
      <global-api></global-api>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import comApi from "./components/composionApi.vue";
import toRaw from "./components/toRaw.vue";
import makeRaw from "./components/makeRaw.vue";
import toRef from "./components/toRef.vue";
import Refs from "./components/refs.vue";
import HandleAttr from "./components/handleWriteAttr.vue";
import testCom from "./components/testCom.vue";
import ss from "./components/testCom.vue";
import applicationSetting from "./wordTest/applicationSetting.vue";
console.log(applicationSetting);
import { test } from "./wordTest/applicationSetting.vue";
console.log("0000000000000000000000000000");
console.log(test());
import GlobalApi from "./wordTest/GlobalApi.vue";
import logic from "./wordTest/Logic.vue";
// import LogixTest from "./wordTest/LogicRe.vue"
import { computed } from "vue";
import useMousePosition from "./utils/userMousePosition.js";
import "./utils/renderer";
// function useMousePosition(){
//   return {x:400,y:400}
// }

import testRepeat from "./components/testRepeat.vue";
import SwitchTest from "./wordTest/SwitchTest.vue";
export default {
  name: "App",
  data() {
    return {
      inputVal: "",
      showValSwitch: "wuweis",
      SwitchTest: "HelloWorld",
      showyi: false,
      yi: null,
      stus: [],
      sd: 100,
      stu: [
        { name: "ww", age: 20 },
        { name: "ww1", age: 21 },
        { name: "ww2", age: 22 },
        { name: "ww3", age: 23 },
      ],
      name: 100,
    };
  },
  created() {
    var that = this;
    window.onclick = function () {
      console.log("window  click");
      console.log(that);
      // that.testclick();
    };
  },
  methods: {
    cahngestateBtn() {
      console.log(this.inputVal);
      this.showValSwitch = this.inputVal;
    },
    testclick() {
      var subwin = window.open("http://127.0.0.1:5501/tes.html");
      //父窗口http://localhost:8080/a.html向子窗口http://localhost:8081/b.html发消息，调用postMessage方法。
      subwin.postMessage("我要给你发消息了!", "http://127.0.0.1:5501");
      // window.addEventListener("message", function (e) {
      //   console.log("a.html接收到的消息:", e.data);
      // });

      function receiveMessage(event) {
        document.write("消息：", event.data);
        // 我们能相信信息的发送者吗?  (也许这个发送者和我们最初打开的不是同一个页面).
        if (event.origin !== "http://192.168.36.115:5501") return;

        // event.source 是我们通过window.open打开的弹出页面 popup
        // event.data 是 popup发送给当前页面的消息 "hi there yourself!  the secret response is: rheeeeet!"
      }
      window.addEventListener("message", receiveMessage, false);
    },
    show() {
      //   console.log(this);
      this.name = ++this.name;
      console.log(this.name);
    },
    btns() {
      this.showyi = true;
      this.yi = "yi";
    },
    btn1() {
      console.log(222);
      this.yi = "er";
    },
    sd() {
      this.stus[1] = {};
    },
    btn() {
      this.stu[2] = { name: "er", age: 100 };
      this.stu.push({ name: 323, age: 243 });
      // 进行直接引用类型进行赋值的话。。。。。
      this.stus = this.stu;
      // this.stu[4] = {
      //   name: "weew",
      //   age: 24,
      // };
    },
  },
  computed: {
    // 数据逻辑
  },
  watch: {
    // 数据逻辑
  },
  components: {
    HelloWorld,
    comApi,
    toRaw,
    makeRaw,
    toRef,
    Refs,
    HandleAttr,
    testCom,
    ss,
    applicationSetting,
    GlobalApi,
    // LogixTest,
    logic,
    testRepeat,
    SwitchTest,
  },
};
</script>
<style >
#test {
  width: 400px;
  height: 300px;
}
>>>>>>> b0d926b3d001a051379f2bc8f1c3c10762390bc8
</style>  