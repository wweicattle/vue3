import {
  createApp,
  render,
  h,
  ref,
  compile
} from 'vue'
import App from './App.vue'
import './index.css'
console.log(App)
var app = createApp(App);
var mouse={
  data(){
    return {}
  },
  mounted(){},
  render(){
    // return this.$slots.default
  }
}
app.component('modal-button', {
  template: `
      <button @click="modalOpen = true">
          Open full screen modal! (With teleport!)
      </button>
      <teleport to="body">
        <div v-if="modalOpen" class="modal">
          <div>
            I'm a teleported modal! 
            (My parent is "body")
            <button @click="modalOpen = false">
              Close
            </button>
          </div>
        </div>
      </teleport>
    `,
    data() {
        return {
            modalOpen: false
        }
    },
    components:{
      mouse
    }
});
app.component('blog-post', {
  data() {
    return {
      sd: 33
    }
  },
  render() {
    console.log(this.$slots);
    console.log(this.$slots.header());
    return h('div', [
      h('header', this.$slots.header()),
      h('main', this.$slots.default()),
      h('footer', this.$slots.footer())
    ])
  },
  setup() {
    let state = ref(100)
    return {
      state
    }
  }
})


app.component('base-input', {
  template: `
    <input ref="input" value="32323"/>
  `,
  methods: {
    focusInput() {
      // this.$refs.input.focus()
    }
  },
  mounted() {
    this.focusInput()
  }
})
app.config.globalProperties.foo = 'barbarabrbar'
// app.component('components', {
//     mounted() {
//         console.log(this.foo) // 'bar'
//     }
// })
app.mount('#app');



console.log(app);

console.log(render);
// vue2.X
// var ff=new Vue({
//     el:"#app",
//     components:{
//         App
//     }
// })
// console.log(ff)