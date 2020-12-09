<template>
  <div class="home">

    <template v-if="showComponents">
      <hello-world msg="Welcome to Your Vue.js App">
        <template #content>
          <!-- 具名插槽 v-slot:content 简写为 #content-->
          name slot content
        </template>
      </hello-world>
    </template>

    <p>
      name: <span class="c-blue">{{name}}</span>
    </p>
    <p>
      num: <span class="c-blue">{{num}}</span>
    </p>
    <p>
      numPow: <span class="c-blue">{{numPow}}</span>
    </p>
    <p>
      book title: <span class="c-blue">{{book.title}}</span>
    </p>
    <p>
      watchColor: <span class="c-blue">{{watchColor}}</span>
      <span 
        class="color-box"
        :style="{
          background: watchColor
        }"
      ></span>
    </p>
    <p>
      <button @click="add" :disabled="num >= 80">add btn</button>
      <button @click="reduce" :disabled="num <= -80">reduce btn</button>
    </p>
    <p>
      <button @click="show">show</button>
      <button @click="hide">hide</button>
    </p>
    <p>
      <button @click="toError">toError</button>
    </p>
  </div>
</template>

<script>
import HelloWorld from '@/components/hello_world'
import testSetup from './setup/test_setup';
import vuexSetup from './setup/vuex_setup';
import { onMounted } from 'vue';

export default {
  name: 'Home',
  data() {
    return {
      showComponents: true
    }
  },
  components: {
    HelloWorld
  },
  mounted() {
    console.log('home onMounted ->')
  },
  methods: {
    show() {
      this.showComponents = true;
    },
    hide() {
      this.showComponents = false;
    }
  },
  setup() {

    let { num, book, add, reduce, numPow, watchColor } = testSetup();
    let { toError } = vuexSetup();

    const name = 'Vue 3';

    // 有多个 onMounted 时，setup中的 onMounted 先按顺序执行，组件中 mounted 最后执行
    onMounted(() => {
      console.log('home setup onMounted ->')
    })

    return {
      name,
      num,
      book,
      add,
      reduce,
      numPow,
      toError,
      watchColor
    }
  },
}
</script>

<style lang="scss">
.home {
  p {
    margin-block: 15px;
  }
  .color-box {
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 1px solid #666;
  }
}
</style>
