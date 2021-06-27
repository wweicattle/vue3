<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    <Components></Components>
  </div>
</template>

<script lang="ts">
import { PageContextProps } from "../types/index"
import { defineComponent, reactive } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

interface f {
  ds: String,
  sa: Number
}
const a: f = {
  ds: "sas",
  sa: 212
}

interface Book {
  title: string
  year?: number
}

const Components = defineComponent({
  data() {
    return {
      book: {
        title: 'Vue 3 Guide',
        author: 'Vue Team',
        year: 2020
      } as Book
    }
  },
  mounted() {
  },
  setup() {
    const book = reactive<Book>({ title: 222 })
  }
})

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
    Components
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
